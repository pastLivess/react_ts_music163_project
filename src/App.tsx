import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
const App = memo(() => {
  return (
    <div className="app">
      <h2>App</h2>
      {useRoutes(routes)}
    </div>
  )
})
App.displayName = 'App'
export default App
