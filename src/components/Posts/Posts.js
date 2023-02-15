import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {useParams} from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const {postId}=useParams()
    const[post, setPost]=useState(null);
    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    },[postId])

    return (
        <div>
            {post&&(<Post post={post}/>)}

        </div>
    );
};

export default Posts;