//Complete the necessary code in this file
import React, { useState } from 'react';
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData); 
  
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}


        {posts.map(post => <Post key={post.imageUrl} post={post} />)}

      
    </div>
  );
};

export default PostsPage;
