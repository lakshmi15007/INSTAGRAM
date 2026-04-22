import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Editprofile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
             axios.get('http://localhost:3001/profile')
              .then( data => {setProfile(data.data); console.log(data)})
    },[]);

  function HandleOnChange(e) {
    if (profile) {
      setProfile(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  }

  const HandleUpdate = async () => {
    axios.put("http://localhost:3001/profile", profile)
      .then(console.log("updated"))
      .catch(err => console.log(err));
  }

  return (
    <div className="m-5">
        {profile ? (
            <div className="d-flex flex-column align-items-center">
                <img src={profile.profilePic} alt="profilepic" className="rounded-circle" style={{ width: '130px', height: '130px' }} />
                <h5 className="ms-3 mb-0 fw-bold text-dark align-self-center">{profile.username}</h5>
        


                <div className="ms-4 gap-3 d-flex flex-column align-items-center" style={{ maxWidth: '300px' }}>
                  <input type="text"
                           value={profile.username}
                           name="username"
                           className="form-control my-4"
                            onChange={HandleOnChange}
                  />
                     

                <input type="text"
                            name="fullName"
                             value={profile.fullName}
                            className="form-control"
                            onChange={HandleOnChange}
                    />


                    <input type="text"
                            name="bio"
                             value={profile.bio}
                            className="form-control"
                            onChange={HandleOnChange}
                    />


                  <input type="text"
                            name="profilePic"
                             value={profile.profilePic}
                            className="form-control"
                            onChange={HandleOnChange}
                    />

                    <button className="btn btn-primary my-3"
                        onClick ={HandleUpdate}
                        >
                      Edit profile
                    </button>
             </div>   
            </div>
        ) : (
        <div>Loading...</div>

        )}
    </div>
  )
}

export default Editprofile;