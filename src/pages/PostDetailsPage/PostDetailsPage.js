import React from 'react';
import PostDetails from "../../components/PostDeatils/PostDetails";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {

    const {postId}=useParams()
    // console.log(postId)
    return (
        <div>
            <PostDetails postId={postId}/>

        </div>
    );
};

export default PostDetailsPage;