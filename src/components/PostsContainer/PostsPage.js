//Complete the necessary code in this file
import React, { useState } from 'react';
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  const [dummyData] = useState(0); 
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
