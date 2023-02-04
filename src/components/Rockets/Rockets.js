import {useEffect, useState} from "react";
import {getAll} from "../services/api.service";
import Rocket from "../rocket/Rocket";

const Rockets = () => {
let [rockets, setRockets]=useState([]);

useEffect(()=>{
    fetch('https://api.spacexdata.com/v4/launches/').then(value => value.json()).then(value => setRockets(value))
},[])

    return (
        <div>
            {rockets.map(rocket =><Rocket key={rocket.id} rocket={rocket}/>)}

        </div>
    );
};

export default Rockets;