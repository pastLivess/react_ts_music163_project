import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: 'hello redux'
  },
  reducers: {}
})
export default counterSlice.reducer
