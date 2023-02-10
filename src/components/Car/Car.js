import React from 'react';
import {carService} from "../../services";

const Car = ({car,setCars, setUpdateCar}) => {
    const{id,brand,price,year}=car

    const deleteCar =async ()=>{
        await carService.delete(id)
        setCars(cars=>{
            const index=cars.findIndex(value => value.id===id);
            cars.splice(index,1)
            return [...cars]
        })
    }
    // const updateCar =async (id,car) => {
    //     await carService.updateById(id).then(value => value.data).then(value => setUpdateCar(value))
    // }

    return (
        <div>
            <div>Id - {id} </div>
            <div>Brand - {brand}</div>
            <div>Price -{price} </div>
            <div>Year -{year} </div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>

            
        </div>
    );
};

export default Car;