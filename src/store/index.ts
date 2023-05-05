import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from './modules/discover'
import playerReducer from './modules/player'
const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

export default store
