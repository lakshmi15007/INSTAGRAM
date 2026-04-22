import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Stories() {
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  let tot = 0;

  useEffect(() => {
    fetch("http://localhost:3001/stories")
      .then(res => res.json())
      .then(data => setStories(data))
      .catch(err => console.error(err));

    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="story d-flex gap-3 my-3">
      <div className=" d-none ">
      {tot = stories.length}
      </div>
      {stories.length === 0 && <p>Loading...</p>}

      {stories.map((story) => {
        // 🔗 connect story with user
        const user = users.find(u => u.id == story.userId);

        return (
          <div key={story.userId} className="story-box text-center" onClick={() => {navigate(`/stories/${story.userId}/${tot}`)}}>
            <div className="gradient-border" >
              <img
                src={user?.profilePic}
                alt="profilePic"
                className="story__item rounded-circle"
              />
            </div>

            {/* Username */}
            <p className="text-truncate ps-4" style={{ maxWidth:"60px"}}>
              {user?.username}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
