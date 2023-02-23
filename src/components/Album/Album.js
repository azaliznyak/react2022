import React from 'react';

const Album = ({album}) => {
    const{userId,id,title}=album
    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>

        </div>
    );
};

export default Album;