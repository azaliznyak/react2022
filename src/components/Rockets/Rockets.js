import {useEffect, useState} from "react";
import {getAll} from "../services/api.service";
import Rocket from "../rocket/Rocket";

const Rockets = () => {
let [rockets, setRockets]=useState([]);

useEffect(()=>{
    getAll().then(value => value.json()).then(value => setRockets(value))
},[])

    return (
        <div>
            {rockets.map(rocket =><Rocket key={rocket.flight_number} rocket={rocket}/>)}

        </div>
    );
};

export default Rockets;