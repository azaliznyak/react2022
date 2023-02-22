import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";

const Cars = () => {
    const[cars,setCars]=useState();

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars())
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Cars;