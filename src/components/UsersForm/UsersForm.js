import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UsersForm = ({setUser}) => {

    const{register,handleSubmit,reset,formState:{errors,isValid}}=useForm({mode:'all'})

    const submit=async (user)=>{
       const{data}=await userService.create(user);
       setUser(user=>[...user,data]);
       reset()

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username&&<span>{errors.username.message}</span>}
            <button disabled={!isValid}>Create</button>
            
        </form>
    );
};

export default UsersForm;