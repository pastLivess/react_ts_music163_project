// 每个文件使用到jsx语法都必须引入React 最终会转为createElement
import React from 'react'
import Discover from '@/views/discover/Discover'
// 引入routes的类型用于代码提示
import { RouteObject } from 'react-router-dom'
// 配置路由
const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]
export default routes
