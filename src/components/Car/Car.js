import React from 'react';

const Car = ({car, setUpdateCar}) => {
    const {brand,price,year,id}=car
    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
            <button>Delete</button>

        </div>
    );
};

export default Car;