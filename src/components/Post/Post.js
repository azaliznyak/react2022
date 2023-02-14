import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id,userId,title}=post
    const navigate=useNavigate()

    return (
        <div>
            <div>Id:{id}</div>
            <div>UserId:{userId}</div>
            <div>Title:{title}</div>
            {/*<Link to={id.toString()} state={{...post}}>Post Details</Link>*/}
            <button onClick={()=>{navigate(id.toString(), {state:post})} }>Details</button>

        </div>
    );
};

export default Post;