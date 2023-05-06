import { getSongDetail, getSongLyric } from '@/services/modules/player'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 1.获取当前歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      // 设置到currentsong
      dispatch(changeCurrentSongAction(song))
    })
    // 2.获取当前歌词信息
    getSongLyric(id).then((res) => {
      console.log(res)
      dispatch(changeCurrentSongLyricAction(res.lrc))
    })
  }
)

interface IPlayerState {
  currentSong: any
  currentSongLyric: any
}
const initialState: IPlayerState = {
  currentSong: {},
  currentSongLyric: []
}
const playerStore = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentSongLyricAction(state, { payload }) {
      state.currentSongLyric = payload
    }
  }
})
export const { changeCurrentSongAction, changeCurrentSongLyricAction } =
  playerStore.actions
export default playerStore.reducer
