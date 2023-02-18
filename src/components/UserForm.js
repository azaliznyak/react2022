import React from 'react';
import {useForm} from "react-hook-form";
import {useAppReducer} from "../hooks/useAppReducer";
import {userActions} from "../Reducers/userReducer";

const UserForm = () => {
    const{register,reset,handleSubmit}=useForm();
    const[,dispatch]=useAppReducer(value=>value.useReducer);

    const save=(user)=>{
        dispatch(userActions.ADD(user));
        reset()
    };
    return (
        <form onSubmit={handleSubmit(save)} >
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'surname'} {...register('surname')}/>
            <input type="text" placeholder={'age'} {...register('age',{valueAsNumber:true})}/>
            <button>save</button>
        </form>
    );
};

export default UserForm;