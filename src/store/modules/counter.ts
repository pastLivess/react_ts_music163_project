import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IState {
  count: number
  name: string
}
const initialState: IState = {
  count: 100,
  name: 'hello redux'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCountAction(state, { payload }: PayloadAction<number>) {
      state.count = state.count + payload
    }
  }
})
export const { changeCountAction } = counterSlice.actions
export default counterSlice.reducer
