// 每个文件使用到jsx语法都必须引入React 最终会转为createElement
import React, { lazy } from 'react'
// 引入routes的类型用于代码提示
import { Navigate, RouteObject } from 'react-router-dom'
// import Discover from '@/views/discover/Discover'
const Discover = lazy(() => import('@/views/discover/Discover'))
const Mine = lazy(() => import('@/views/mine/Mine'))
const Focus = lazy(() => import('@/views/focus/Focus'))
const Download = lazy(() => import('@/views/download/Download'))
// 二级路由

const Album = lazy(() => import('@/views/discover/c-views/album/Album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist/Artist'))
const DjRadio = lazy(() => import('@/views/discover/c-views/djradio/DjRadio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking/Ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs/Songs'))
const Recommend = lazy(
  () => import('@/views/discover/c-views/recommend/Recommend')
)
// 配置路由
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/Download" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <DjRadio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
