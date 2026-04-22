import React, { useState, useEffect } from "react";


function post() {
     const [posts, setPosts] = useState([]);
     const [users, setUsers] = useState([]);

useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(data => data.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err));

        fetch("http://localhost:3001/users")
        .then(data => data.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err));
}, []);

  const getUser = (userId) => {
  return users.find(user => user.id == userId);
};
  return (
    <div>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            const user = getUser(post.userId);
            return (
               <div key={post.id} className="mb-3 p-3">
                <div className="d-flex align-items-center mb-2">
                  <img className="rounded-circle" src={user?.profilePic} alt= "profilepic" style={{width: '40px',height: '40px'}}/>
                  <div className="ms-2">
                    <div className="fw-bold">{user?.username}</div>
                    <small>{user?.fullName}</small>
                  </div>
                </div>
                <img src={post.image} alt="post" style={{ width: '100%', borderRadius: '8px' }} />

                <div className="mt-2 mb-2">
                  <div className="d-flex gap-3">
                    <i className="bi bi-heart" style={{ cursor: 'pointer', fontSize: '20px' }}></i>
                    <i className="bi bi-chat" style={{ cursor: 'pointer', fontSize: '20px' }}></i>
                    <i className="bi bi-send" style={{ cursor: 'pointer', fontSize: '20px' }}></i>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="fw-bold">{post.likes} likes</div>
                  <div>{post.caption}</div>
                </div>  

                {post.comments.length > 0 && (
                  <div className="mt-2 border-top pt-2">
                    <small className="text-muted">View all {post.comments.length} comments</small>
                    {post.comments.map((comment, index) => (
                      <div key={index} className="mt-1">
                        <small><strong>{comment.user}</strong> {comment.text}</small>
                      </div>
                    ))}
                    </div>
                )}
                </div>
            )
        })}
          </div>
      ) : (
        <div>Loading...</div>
      )}
      </div>
      );
    }

export default post; 