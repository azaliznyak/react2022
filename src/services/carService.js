import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    updateById:(id,data)=>axiosService.put(`${urls.cars}/${id}`,data),
    create:(newCar)=>axiosService.post(urls.cars,newCar),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}