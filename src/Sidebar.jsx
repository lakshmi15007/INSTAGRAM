import React from 'react'
import logo from './assets/Logo-Instagram-1.png'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="m-3">
       <div className="d-flex flex-column gap-3 fw-bold">
           <img className="logo-text" src={logo} alt="Instagram Logo" />
               <div><i className="bi bi-house-door-fill"></i>Home</div>   
               <div><i className="bi bi-search"></i>Search</div>
               <div><i className="bi bi-compass"></i>Explore</div>
               <div><i className="bi bi-camera-reels"></i>Reels</div>
               <div><i className="bi bi-send"></i>Messages</div>
               <div><i className="bi bi-suit-heart"></i>Notifications</div>
               <div><i className="bi bi-plus-lg"></i>Create</div>
               <div onClick={() => navigate('/pro')}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className=" position-fixed bottom-0 d-flex flex-column gap-3 mb-3 fw-bold">
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default Sidebar