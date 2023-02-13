import {useEffect, useState} from "react";
import {postsService} from "../../services";

const PostDetails = ({postId}) => {
    const[post, setPost]=useState(null);

    useEffect(()=>{
        postsService.getById(postId).then(({data})=>{setPost(data)})
    },[postId])

    return (
        <div>
            {post &&
                <>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body:{post.body}</div>
                </>
            }

        </div>
    );
};

export default PostDetails;