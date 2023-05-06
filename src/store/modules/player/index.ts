import { IRootState } from '@/hooks/types/app'
import { getSongDetail, getSongLyric } from '@/services/modules/player'
import { ILyrics, parseLyric } from '@/utils/parse-lyric'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>('currentSong', (id: number, { dispatch, getState }) => {
  const playSongList = getState().player.playSongList // 1.获取当前歌曲信息
  // 如果在我们播放列表中找到和我们听的歌id一样,返回他的索引
  const findIndex = playSongList.findIndex((item) => item.id === id)
  // 索引-1表示没有找到,发送请求请求歌曲
  if (findIndex === -1) {
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]

      const newPlaySongList = [...playSongList]
      // 如果我们当前播放的歌不在列表中,就要加到里面
      newPlaySongList.push(song)
      // 修改当前播放歌曲,并获取到播放列表,与当前播放的索引,
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
    })
  } else {
    // 找到相同item 修改当前的歌曲和索引
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }

  // 2.获取当前歌词信息
  getSongLyric(id).then((res) => {
    const lyricString = res.lrc.lyric
    const lyrics = parseLyric(lyricString)
    // console.log(lyrics)
    dispatch(changeCurrentSongLyricAction(lyrics))
  })
})

interface IPlayerState {
  currentSong: any
  currentSongLyric: ILyrics[]
  currentSongLyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}
const initialState: IPlayerState = {
  currentSong: {},
  currentSongLyric: [],
  currentSongLyricIndex: -1,
  playSongList: [
    {
      name: 'Crown of the Loser',
      id: 347231,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 11171,
          name: 'Beyond Cure',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 10,
      st: 0,
      rt: '',
      fee: 8,
      v: 17,
      crbt: null,
      cf: '',
      al: {
        id: 34210,
        name: 'Your Head Smells Good',
        picUrl:
          'https://p1.music.126.net/uOAROZ8Ia72yvcmfMIg_Uw==/125344325570003.jpg',
        tns: ['你的头闻起来好香'],
        pic: 125344325570003
      },
      dt: 162120,
      h: {
        br: 320000,
        fid: 0,
        size: 6487814,
        vd: -28400,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 3892705,
        vd: -26199,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2595151,
        vd: -25000,
        sr: 44100
      },
      sq: {
        br: 1007034,
        fid: 0,
        size: 20407562,
        vd: -28500,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 139264,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 17,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1400821,
      mv: 0,
      publishTime: 1277481600000
    },
    {
      name: '海阔天空',
      id: 347230,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 11127,
          name: 'Beyond',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000004240302',
      fee: 1,
      v: 114,
      crbt: null,
      cf: '',
      al: {
        id: 34209,
        name: '海阔天空',
        picUrl:
          'https://p2.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg',
        tns: [],
        pic_str: '109951165796899183',
        pic: 109951165796899180
      },
      dt: 326000,
      h: {
        br: 320001,
        fid: 0,
        size: 13042460,
        vd: -5649,
        sr: 44100
      },
      m: {
        br: 192001,
        fid: 0,
        size: 7825493,
        vd: -3083,
        sr: 44100
      },
      l: {
        br: 128001,
        fid: 0,
        size: 5217010,
        vd: -1486,
        sr: 44100
      },
      sq: {
        br: 798710,
        fid: 0,
        size: 32547445,
        vd: -5639,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 114,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 7002,
      rtype: 0,
      rurl: null,
      mv: 376199,
      publishTime: 747504000000
    }
  ] /* 播放列表用于多首歌曲切换 */,
  playSongIndex: -1 /* 播放列表的索引 */,
  playMode: 0 /* 0 顺序播放 1.随机播放 2单曲循环 */
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
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeCurrentSongLyricAction,
  changeCurrentSongLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerStore.actions
export default playerStore.reducer
