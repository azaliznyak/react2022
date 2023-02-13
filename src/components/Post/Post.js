import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,userId,title}=post

    return (
        <div>
            <div>Id:{id}</div>
            <div>UserId:{userId}</div>
            <div>Title:{title}</div>
            <Link to={id.toString()}>Post Details</Link>

        </div>
    );
};

export default Post;