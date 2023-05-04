import {
  getBanners,
  getHotRecommend,
  getNewAlbum
} from '@/services/modules/discover'
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
// 新碟上架
export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    console.log(res.albums)

    dispatch(changeNewAlbumAction(res.albums))
  }
)
type IRecommendState = {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  }
  /* extraReducers(builder) {
    builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
      state.banners = payload
    })
  } */
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction
} = recommendStore.actions
export default recommendStore.reducer
