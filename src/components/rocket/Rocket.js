import React from 'react';

const Rocket = ({rocket}) => {

    return (
        <div>
            <h2>{rocket.flight_number}</h2>
            <div>Name - {rocket.mission_name}</div>
            <div>Year - {rocket.launch_year}</div>
            <img src={rocket.links.mission_patch} alt={rocket.mission_name}/>

        </div>
    );
};

export default Rocket;