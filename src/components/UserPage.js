import React from 'react';
import UserForm from "./UserForm";
import Users from "./Users";

const UserPage = () => {
    return (
        <div>
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
};

export default UserPage;