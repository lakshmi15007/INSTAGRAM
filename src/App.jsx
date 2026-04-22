import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className="d-flex">
      <div className="w-20 position-fixed top-0 start-0 vh-100 overflow-y-auto"><Sidebar/></div>
      <div className="w-50 ms-auto"><Feed/></div>
      <div className="w-30"><Suggestions/></div>
    </div>
  )
}

export default App