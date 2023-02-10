import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators";
import {carService} from "../../services";

const CarForm = ({setCars,updateCar}) => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({mode:'all', resolver:joiResolver(carValidator)})

    const submit = async (car)=>{
        const {data}=await carService.create(car);
        setCars(cars=>[...cars,data])
        reset()
    }

    useEffect(()=>{
        if (updateCar){
            setValue('brand',updateCar.brand);
            setValue('price',updateCar.price);
            setValue('year',updateCar.year)
        }

    },[updateCar]);

    const updateNewCar =async (car) => {
       const {data}=await carService.updateById(updateCar.id,car)
        if (Object.keys(data).length){
            const {data}= await carService.getAll()
            setCars(data)
        }
    }

    return (
        <form onSubmit={handleSubmit(updateCar? updateNewCar:submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export default CarForm;