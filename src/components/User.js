import React from 'react';

const User = ({user}) => {
    const {id,name,surname,age}=user
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>

        </div>
    );
};

export default User;