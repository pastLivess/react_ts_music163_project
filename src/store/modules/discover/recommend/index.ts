import { getBanners } from '@/services/modules/discover'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))

    // return res.banners
  }
)

type IRecommendState = {
  banners: any[]
}
const initialState: IRecommendState = {
  banners: []
}
const recommendStore = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  /* extraReducers(builder) {
    builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
      state.banners = payload
    })
  } */
})

export const { changeBannersAction } = recommendStore.actions
export default recommendStore.reducer
