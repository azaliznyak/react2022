import React from 'react';

const Rocket = ({rocket}) => {
    const {id,mission_name,launch_year,mission_path_small}=rocket
    return (
        <div>
            <div>Name - {mission_name}</div>
            <div>Year - {launch_year}</div>
            <div>Path - {mission_path_small}</div>

        </div>
    );
};

export default Rocket;