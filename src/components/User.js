import {Link} from "react-router-dom";

const User = ({item}) => {
    const {id,name}=item
    return (
        <div>
            {id} -- {name} <Link to={id.toString()} state={{...item}}>Details</Link>
        </div>
    );
};

export default User;