import React, { memo, Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from './hooks/types/app'
import { changeCountAction } from './store/modules/counter'
import Demo2 from './views/demo/demo2'

const App = memo(() => {
  const dispatch = useAppDispatch()

  return (
    <div className="app">
      <h2>App</h2>
      <Demo2 name="demo2" age={18} />
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/discover">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})
App.displayName = 'App'
export default App
