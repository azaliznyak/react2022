import React, {useEffect, useState} from 'react';

import Car from "../Car/Car";

const Cars = ({cars, setCars, setUpdateCar}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCars={setCars} setUpdateCar={setUpdateCar}/>)}
            
        </div>
    );
};

export default Cars;