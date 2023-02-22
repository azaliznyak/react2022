import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, setUpdateCar,setCars}) => {
    const {brand,price,year,id}=car;

    const deleteCar=async ()=>{
        await carService.deleteById(id)
        setCars(cars=>{
            const index=cars.findIndex(value => value.id===id);
            cars.splice(index,1)
            return[...cars]
        })
    }
    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>

        </div>
    );
};

export default Car;