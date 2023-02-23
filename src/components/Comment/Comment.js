import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate=useNavigate()
    const{postId,id,name,email,body}=comment
    return (
        <div>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
            <button onClick={()=>navigate(postId.toString())}>Show Post</button>

        </div>
    );
};

export default Comment;