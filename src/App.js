
import './App.css';
import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "./services";


function App() {
  const [cars,setCars]=useState([]);

  useEffect(()=>{
    carService.getAll().then(value => value.data).then(value => setCars(value))
  },[])


  return (
<div>
  <CarForm setCars={setCars}/>
  <hr/>
  <Cars cars={cars}/>

</div>
  );
}

export default App;
