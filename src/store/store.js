import { configureStore } from '@reduxjs/toolkit'
import addonsReducer from './addonsSlice.js'
import mealsReducer from './mealsSlice.js'
import venueReducer from './venueSlice.js'

const store = configureStore({
  reducer: {
    venue: venueReducer,
    addons: addonsReducer,
    meals: mealsReducer,
  },
})

export default store
