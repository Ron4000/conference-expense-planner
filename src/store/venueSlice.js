import { createSlice } from '@reduxjs/toolkit'
import { rooms } from '../data/products.js'

const initialState = {
  items: rooms.map((room) => ({ ...room, quantity: 0 })),
}

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    incrementRoom(state, action) {
      const room = state.items.find((item) => item.id === action.payload)
      if (room) room.quantity += 1
    },
    decrementRoom(state, action) {
      const room = state.items.find((item) => item.id === action.payload)
      if (room && room.quantity > 0) room.quantity -= 1
    },
  },
})

export const { incrementRoom, decrementRoom } = venueSlice.actions
export default venueSlice.reducer
