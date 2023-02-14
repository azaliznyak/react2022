import {axiosService} from "../AxiosService/AxiosService";
import {urls} from "../../configs/urls";

const todosService={
    getAll:()=>axiosService.get(urls.todos)
}

export {
    todosService
}