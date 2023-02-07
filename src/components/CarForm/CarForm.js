import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators";
import {carService} from "../../services";

const CarForm = ({setCars}) => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({mode:'all', resolver:joiResolver(carValidator)})

    const submit = async (car)=>{
        const {data}=await carService.create(car);
        setCars(cars=>[...cars,data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export default CarForm;