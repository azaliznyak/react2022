import React from 'react';
import PostDetails from "../../components/PostDeatils/PostDetails";
import {useLocation, useParams} from "react-router-dom";

const PostDetailsPage = () => {

    const {postId}=useParams()
    const {state}=useLocation()
    // console.log(postId)
    return (
        <div>
            <PostDetails postId={postId} state={state}/>

        </div>
    );
};

export default PostDetailsPage;