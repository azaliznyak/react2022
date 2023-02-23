import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title,completed}=todo
    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{completed}</div>

        </div>
    );
};

export default Todo;