import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axios.service";
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({cars}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
            
        </div>
    );
};

export default Cars;