import React, { useState, useEffect } from 'react';
import imagesMap from './api/images';

function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err));

    fetch("http://localhost:3001/suggestions")
      .then(res => res.json())
      .then(data => {
        // 🔥 Add follow state
        const updatedData = data.map(user => ({
          ...user,
          isFollowing: false
        }));
        setSuggestions(updatedData);
      })
      .catch(err => console.log(err));
  }, []);

  // 🔥 FOLLOW BUTTON CLICK
  const handleFollow = (id) => {
    const updated = Suggestions.map(user =>
      user.id === id
        ? { ...user, isFollowing: !user.isFollowing }
        : user
    );

    setSuggestions(updated);
  };

  return (
    <div className="p-3">

      {profile ? (
        <>
          <div className="fw-bold mb-3">Your Profile</div>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle"
                src={imagesMap[profile?.profilePic] || encodeURI(profile?.profilePic)}
                alt="profile"
                style={{ width: '50px', height: '50px' }}
              />
              <div className="ms-2">
                <div className="fw-bold">{profile?.username}</div>
                <small className="text-muted">{profile?.fullName}</small>
              </div>
            </div>

            <button className="btn text-primary btn-sm rounded-pill p-2">
              Switch
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <div className="fw-bold mb-3">Suggestions For You</div>

      {Suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle"
              src={imagesMap[suggestion.profilePic] || encodeURI(suggestion.profilePic)}
              alt="profilepic"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="ms-2">
              <div className="fw-bold">{suggestion.username}</div>
              <small className="text-muted">{suggestion.fullName}</small>
            </div>
          </div>

          {/* 🔥 BUTTON */}
          <button
            className="btn btn-sm text-primary"
            onClick={() => handleFollow(suggestion.id)}
          >
            {suggestion.isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;