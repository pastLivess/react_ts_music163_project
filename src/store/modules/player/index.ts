import { getSongDetail, getSongLyric } from '@/services/modules/player'
import { ILyrics, parseLyric } from '@/utils/parse-lyric'
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
      const lyricString = res.lrc.lyric
      const lyrics = parseLyric(lyricString)
      // console.log(lyrics)
      dispatch(changeCurrentSongLyricAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  currentSongLyric: ILyrics[]
  currentSongLyricIndex: number
}
const initialState: IPlayerState = {
  currentSong: {},
  currentSongLyric: [],
  currentSongLyricIndex: -1
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
    },
    changeCurrentSongLyricIndexAction(state, { payload }) {
      state.currentSongLyricIndex = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeCurrentSongLyricAction,
  changeCurrentSongLyricIndexAction
} = playerStore.actions
export default playerStore.reducer
