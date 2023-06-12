import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPosts, getSinglePost } from "../../Redux/Actions/blogActions";

import "./blog.css";
import PostCreateFrom from "./PostCreateFrom";
// import PostCreateFrom from "./PostCreateFrom";

const PostDisplay = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postsData = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  //get signle post
  const onCLickTogetSinglePost = (id) => {
    dispatch(getSinglePost(id));
    navigate(`/posts/${id}`);
  };
  return (
    <div>
    
  
    <PostCreateFrom />
   
   
      <div className="mainContainer">
        {postsData.map((each) => (
          <div className="cardcontainer" key={each.id}>
            <h1 className="cardtitle">{each.title}</h1>
            <p className="cardbody">{each.body}</p>
            <button
              onClick={() => onCLickTogetSinglePost(each.id)}
              className="btn btn-primary"
            >
              view
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDisplay;
