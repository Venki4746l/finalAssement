import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './blog.css'

const SinglePost = () => {
    const singlePost = useSelector((state) => state.posts.single);
    console.log(singlePost)

    const navigate=useNavigate()

    const onClickBack=()=>{
        navigate("/posts")
    }

  return (
    <div>
      <h1>single post view</h1>
      {singlePost.map((each)=><div className="singlecardcontainer" key={each.id}>
            <h1 className="singlecardtitle">{each.title}</h1>
            <p className="singlecardbody">{each.body}</p>
            <button
              onClick={() => onClickBack()}
              className="btn btn-primary"
            >
              Back
            </button>
          </div>)}
    </div>
  )
}

export default SinglePost
