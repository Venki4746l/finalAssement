import axios from "axios"

export const GET_ALL="GET_ALL"
export const GET_SINGLE ="GET_SINGLE"
export const CREATE_POST="CREATE_POST"

//create api for getting the all posts
export const getAllPosts=()=>async (dispatch)=>{
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        if(response.status===200){
            console.log(response)
            dispatch({type:GET_ALL,payload:response.data})
        }

    }catch(error){
        console.log(error)

    }
}

//getting single
export const getSinglePost=(id)=>async (dispatch)=>{
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(response.status===200){
            console.log(response.data)
            dispatch({type:GET_SINGLE,payload:response.data})
        }

    }catch(error){
        console.log(error)

    }
}


export const createPost=(credentials)=>async (dispatch)=>{
    try{
        
        const response=await axios.post("https://jsonplaceholder.typicode.com/posts",credentials)
        if(response.status===200){
            dispatch({type:CREATE_POST,payload:response.data})
            console.log(response.data)

        }

    }catch(error){
        console.log(error)

    }
}