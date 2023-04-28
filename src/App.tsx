import React, { memo, Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header/AppHeader'
import AppFooter from './components/app-footer/AppFooter'

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})
App.displayName = 'App'
export default App
