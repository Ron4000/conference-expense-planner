import { createSlice } from '@reduxjs/toolkit'
import { addons } from '../data/products.js'

const initialState = {
  items: addons.map((addon) => ({ ...addon, quantity: 0 })),
}

const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    incrementAddon(state, action) {
      const addon = state.items.find((item) => item.id === action.payload)
      if (addon) addon.quantity += 1
    },
    decrementAddon(state, action) {
      const addon = state.items.find((item) => item.id === action.payload)
      if (addon && addon.quantity > 0) addon.quantity -= 1
    },
  },
})

export const { incrementAddon, decrementAddon } = addonsSlice.actions
export default addonsSlice.reducer
