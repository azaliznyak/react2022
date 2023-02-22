import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateById:(id)=>axiosService.put(`${urls.cars}/${id}`),
    create:(newCar)=>axiosService.post(urls.cars,newCar),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}