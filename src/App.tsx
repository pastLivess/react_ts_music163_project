import React, { memo } from 'react'

const App = memo(() => {
  const obj = { name: '张三', age: 18 }

  return <div>App</div>
})
App.displayName = 'App'
export default App
