import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numberOfPeople: 0,
  selected: {
    breakfast: false,
    lunch: false,
    highTea: false,
    dinner: false,
  },
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setNumberOfPeople(state, action) {
      const number = Number(action.payload)
      state.numberOfPeople = Number.isFinite(number)
        ? Math.max(0, Math.floor(number))
        : 0
    },
    toggleMeal(state, action) {
      if (Object.hasOwn(state.selected, action.payload)) {
        state.selected[action.payload] = !state.selected[action.payload]
      }
    },
  },
})

export const { setNumberOfPeople, toggleMeal } = mealsSlice.actions
export default mealsSlice.reducer
