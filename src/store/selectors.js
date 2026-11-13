import { createSelector } from '@reduxjs/toolkit'
import { meals as mealProducts } from '../data/products.js'

const selectVenueItems = (state) => state.venue.items
const selectAddonItems = (state) => state.addons.items
const selectMealState = (state) => state.meals

export const selectVenueTotal = createSelector(
  [selectVenueItems],
  (items) =>
    items.reduce(
      (total, room) => total + room.price * room.quantity,
      0,
    ),
)

export const selectAddonsTotal = createSelector(
  [selectAddonItems],
  (items) =>
    items.reduce(
      (total, addon) => total + addon.price * addon.quantity,
      0,
    ),
)

export const selectMealsTotal = createSelector(
  [selectMealState],
  ({ selected, numberOfPeople }) =>
    mealProducts.reduce((total, meal) => {
      return selected[meal.id]
        ? total + meal.pricePerPerson * numberOfPeople
        : total
    }, 0),
)

export const selectGrandTotal = createSelector(
  [selectVenueTotal, selectAddonsTotal, selectMealsTotal],
  (venueTotal, addonsTotal, mealsTotal) =>
    venueTotal + addonsTotal + mealsTotal,
)

export const selectSummaryRows = createSelector(
  [selectVenueItems, selectAddonItems, selectMealState],
  (venueItems, addonItems, { selected, numberOfPeople }) => {
    const roomRows = venueItems
      .filter((room) => room.quantity > 0)
      .map((room) => ({
        name: `${room.name} (Capacity: ${room.capacity})`,
        unitCost: room.price,
        quantityLabel: String(room.quantity),
        totalCost: room.price * room.quantity,
      }))

    const addonRows = addonItems
      .filter((addon) => addon.quantity > 0)
      .map((addon) => ({
        name: addon.name,
        unitCost: addon.price,
        quantityLabel: String(addon.quantity),
        totalCost: addon.price * addon.quantity,
      }))

    const mealRows = mealProducts
      .filter((meal) => selected[meal.id])
      .map((meal) => ({
        name: meal.name,
        unitCost: meal.pricePerPerson,
        quantityLabel: `For ${numberOfPeople} people`,
        totalCost: meal.pricePerPerson * numberOfPeople,
      }))

    return [...roomRows, ...addonRows, ...mealRows]
  },
)
