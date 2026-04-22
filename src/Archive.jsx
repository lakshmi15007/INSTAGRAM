import React, { useState, useEffect } from "react";
import data from "./db/db.json";

const Archive = () => {
  const [archiveStories, setArchiveStories] = useState([]);

  useEffect(() => {
    const currentUserId = data.profile.id;
    const now = new Date();

    // 🔥 Filter Lakshimi Priya's archived stories
    const filteredStories = data.stories.filter((story) => {
      const storyTime = new Date(story.createdAt);
      const hoursPassed = (now - storyTime) / (1000 * 60 * 60);

      return story.userId === currentUserId && hoursPassed > 24;
    });

    setArchiveStories(filteredStories);
  }, []);

  return (
    <div className="archive-container">
      <h2>Your Story Archive</h2>

      {archiveStories.length === 0 ? (
        <p>No archived stories</p>
      ) : (
        archiveStories.map((story) => (
          <div key={story.id} className="archive-card">
            <img src={story.image} alt="story" className="archive-img" />

            <div className="archive-info">
              <p className="username">{story.user.username}</p>
              <p className="time">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Archive;