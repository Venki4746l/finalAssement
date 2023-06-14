import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>navigate to tasks</h1>
      <div style={{display:"flex",justifyContent:"space-around"}}>
       <div>
        <h5>task one posts application</h5>
       <Link to="/posts">Task One posts</Link>
       </div>
        <div>
            <h4>Counter application task 2</h4>
        <Link to="/counter">Counter task2</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
