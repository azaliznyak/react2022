import React from 'react';

const User = ({user}) => {
    const{id,username}=user
    return (
        <div>
            <div>{id} --- {username}</div>

        </div>
    );
};

export default User;