import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Profile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
             axios.get('http://localhost:3001/profile')
              .then( data => {setProfile(data.data); console.log(data)})
    },[]);

  const navigate = useNavigate();

  return (
    <div className="m-5">
        {profile ? (
            <div className="profile d-flex flex-column align-items-center">
              <div className="d-flex align-items-flex-start pb-3 pt-3 gap-1">
                  <div className="d-flex flex-column align-items-center">
                    <img src={profile.profilePic} alt="profilepic" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
                    <p style={{ marginTop: '15px' }} className="text-center ms-2">{profile.bio}</p>
                  </div>
                  <div className="d-flex flex-column ms-3">
                    <h5 className="mb-1 fw-bold text-dark fs-2 me-2">{profile.username}</h5>
                    <h5>{profile.fullName}</h5>
                    <div className="follow d-flex flex-row gap-3 fw-bold mt-2 ms-2">
                      <span>{profile.posts} posts</span>
                      <span>{profile.following} following</span>
                      <span>{profile.followers} followers</span>
                    </div>
                  </div>
              </div>
                <div className="d-flex d-grid gap-3 align-items-center p-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <button className="btn btn-outline-secondary my-1 px-5"
                        onClick={() => navigate('/Editprofile')}>
                      Edit profile
                    </button>
                    <button className="btn btn-outline-secondary my-1 px-5"
                        onClick={() => navigate('/archive')}>
                      View archive
                    </button>
             </div>
            </div>
        ) : (
        <div>Loading...</div>

        )}
    </div>
  )
}

export default Profile;