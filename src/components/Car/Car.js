import React from 'react';

const Car = ({car}) => {
    const{id,brand,price,year}=car
    return (
        <div>
            <div>Id - {id} </div>
            <div>Brand - {brand}</div>
            <div>Price -{price} </div>
            <div>Year -{year} </div>
            <button>Update</button>
            <button onClick={()=>{}}>Delete</button>

            
        </div>
    );
};

export default Car;