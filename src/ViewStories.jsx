import React, { useEffect, useState } from 'react'
import { useParams , Link , useNavigate } from 'react-router-dom'
import imagesMap from './api/images'

function ViewStories() {

  const { userId , tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  // 1️⃣ Fetch story by userId
useEffect(() => {
  fetch(`http://localhost:3001/stories?userId=${userId}`)
    .then(data => data.json())
    .then(data => {
      // data is an array: [{...}]
      // We check if it has items, then take the first one
      if (data && data.length > 0) {
        setStory(data[0]); 
      } else {
        setStory(null);
      }
    })
    .catch(err => console.log(err))
}, [userId]);

if (userId > tot || userId <= 0) {
  navigate ('/');
}

    return (
  <div>
    {story ? (
      <>
        <div className=" d-flex justify-content-center align-items-center">
            <Link to={`/stories/${Number(userId) - 1}/${tot}`}><i className="bi bi-caret-left-fill"></i></Link>
        <img className="vh-100 w-30" src={imagesMap[story?.image] || (story?.image && encodeURI(story.image))} alt="Story" width="200" />
          <Link to={`/stories/${Number(userId) + 1}/${tot}`}><i className="bi bi-caret-right-fill"></i></Link>
        </div>
      </>

    ) : (
      <div>Loading...</div>
    )
  }
    </div>
);
}

export default ViewStories;
