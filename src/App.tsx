import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Download from './views/download/Download'
const App = memo(() => {
  return (
    <div className="app">
      <h2>App</h2>
      <Download name="aaa" age={18}>
        <div>哈哈哈</div>
        <div>嗨嗨嗨</div>
      </Download>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
})
App.displayName = 'App'
export default App
