import React, {useEffect, useState} from 'react';
import {ApiService} from "../../services/api.service";
import User from "../../components/User";
import {Outlet} from "react-router-dom";
import UserDetails from "../UserDetails";


const Users = () => {
    let apiService=new ApiService('users');
    let[users,setUsers]=useState([])

    useEffect(()=>{
        apiService.geAllData().then(value => setUsers(value))

    },[])
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}

            <hr/>

            <div>
                <h3>details about user</h3>
                <Outlet/>
            </div>


        </div>
    );
};

export default Users;