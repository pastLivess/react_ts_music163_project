import { getBanners, getHotRecommend } from '@/services/modules/discover'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))

    // return res.banners
  }
)
// 热门推荐
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend()
    dispatch(changeHotRecommendAction(res.result))
  }
)
type IRecommendState = {
  banners: any[]
  hotRecommend: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: []
}
const recommendStore = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    }
  }
  /* extraReducers(builder) {
    builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
      state.banners = payload
    })
  } */
})

export const { changeBannersAction, changeHotRecommendAction } =
  recommendStore.actions
export default recommendStore.reducer
