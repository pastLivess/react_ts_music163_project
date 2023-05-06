import React, { memo, Suspense, useEffect } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header/AppHeader'
import AppFooter from './components/app-footer/AppFooter'
import AppPlayBar from './views/player/c-cpns/app-player-bar/AppPlayerBar'
import { useAppDispatch } from './hooks/types/app'
import { fetchCurrentSongAction } from './store/modules/player'

const App = memo(() => {
  const dispatch = useAppDispatch()
  // 获取某一歌曲
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2009017157))
  }, [])
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      {/* 播放工具类 */}
      <AppPlayBar />
    </div>
  )
})
App.displayName = 'App'
export default App
