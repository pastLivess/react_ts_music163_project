import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from './modules/discover'
const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

export default store
