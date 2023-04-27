// 每个文件使用到jsx语法都必须引入React 最终会转为createElement
import React, { lazy } from 'react'
// 引入routes的类型用于代码提示
import { Navigate, RouteObject } from 'react-router-dom'
// import Discover from '@/views/discover/Discover'
const Discover = lazy(() => import('@/views/discover/Discover'))
const Mine = lazy(() => import('@/views/mine/Mine'))
const Focus = lazy(() => import('@/views/focus/Focus'))
const Download = lazy(() => import('@/views/download/Download'))
// 配置路由
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/Download" />
  },
  {
    path: '/discover',
    element: <Discover />
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
