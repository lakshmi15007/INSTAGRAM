import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import Suggestions from './Suggestions'

function Pro() {
  return (
    <div className="d-flex">
      <div className="w-20 position-fixed top-0 start-0 vh-100 overflow-y-auto"><Sidebar/></div>
      <div className="w-50 ms-auto me-5 align-self-start"><Profile/></div>
      <div className="w-30"><Suggestions/></div>
    </div>
  )
}

export default Pro