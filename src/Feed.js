import React, { useEffect, useState } from "react";
import StoryFeed from "./StoryFeed";
import Post from "./Post";
import MessegePost from "./MessegePost";
import db from "./firebase";

import "./feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className='feed'>
      <StoryFeed />
      <Post />
      {posts.map((post) => (
        <MessegePost
          key={post.data.id}
          profilepic={post.data.profilePic}
          messege={post.data.messege}
          timestamp={post.data.timeStamp}
          username={post.data.userName}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
