import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}
const initialState: IPlayerState = {
  currentSong: {
    name: 'U',
    id: 2009017157,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 1143033,
        name: '队长',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 4,
    crbt: null,
    cf: '',
    al: {
      id: 157097147,
      name: '行至此地',
      picUrl:
        'https://p2.music.126.net/T2c2Hb5_40Ugq-zxvwkOuA==/109951168171507430.jpg',
      tns: [],
      pic_str: '109951168171507430',
      pic: 109951168171507420
    },
    dt: 204065,
    h: {
      br: 320002,
      fid: 0,
      size: 8164876,
      vd: -68867,
      sr: 44100
    },
    m: {
      br: 192002,
      fid: 0,
      size: 4898943,
      vd: -66380,
      sr: 44100
    },
    l: {
      br: 128002,
      fid: 0,
      size: 3265977,
      vd: -65176,
      sr: 44100
    },
    sq: {
      br: 960832,
      fid: 0,
      size: 24509050,
      vd: -68310,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '01',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 1,
    s_id: 0,
    mark: 8192,
    originCoverType: 0,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 4,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mst: 9,
    cp: 1416618,
    rtype: 0,
    rurl: null,
    mv: 0,
    publishTime: 1672070400000
  }
}
const playerStore = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})
export default playerStore.reducer
