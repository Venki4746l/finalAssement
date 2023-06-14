import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import {v4 as uuid4} from "uuid";
import { createPost } from '../../Redux/Actions/blogActions';
import './blog.css'
const PostCreateFrom = () => {
    const [title,setTitle] =useState('')
    const [body,setBody]=useState('')
    const dispatch=useDispatch()

    const onSubmitHandler=(e)=>{
      e.preventDefault()
        
        const newPost={
            id:101,
            userId:101,
            title:title,
            body:body  
        }
        if(title&&body){
          dispatch(createPost(newPost))
          setBody('')
          setTitle('')
          alert("successfully create")
        }
       
        
    }
  return (
    <div>
      <h5>Create Post</h5>
      <form className='d-flex flex-column fromcontainer' onSubmit={onSubmitHandler}>
        <label>Title</label>
        <input  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title' type="text" required />
        <label>Body</label>
        <input value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Enter Body' type="text" required />
        <button className='btn btn-primary' type="submit">post</button>
      </form>
      
    </div>
  )
}

export default PostCreateFrom
