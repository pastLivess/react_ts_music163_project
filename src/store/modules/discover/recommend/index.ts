import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
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
    // console.log(res.albums)

    dispatch(changeNewAlbumAction(res.albums))
  }
)
// 榜单部分数据的获取
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingAction = createAsyncThunk(
  'ranking',
  (arg, { dispatch }) => {
    // 思路1 把三个榜单循环然后用switch让每个榜单匹配id发送dispatch存储到仓库
    // 思路2 等待3个的结果都发完之后, 存放到一个state中

    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      //
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)
// 热门歌手
export const fetchTopArtistAction = createAsyncThunk(
  'topArtist',
  async (arg, { dispatch }) => {
    const res = await getArtistList()
    dispatch(changeTopArtistAction(res.artists))
  }
)

type IRecommendState = {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  rankings: any[]
  topArtist: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  rankings: [],
  topArtist: []
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
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeTopArtistAction(state, { payload }) {
      state.topArtist = payload
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
  changeNewAlbumAction,
  changeRankingsAction,
  changeTopArtistAction
} = recommendStore.actions
export default recommendStore.reducer
