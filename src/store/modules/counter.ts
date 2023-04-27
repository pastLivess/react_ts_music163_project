import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: 'hello redux'
  },
  reducers: {
    changeCountAction(state, { payload }) {
      state.count = state.count + payload
    }
  }
})
export const { changeCountAction } = counterSlice.actions
export default counterSlice.reducer
