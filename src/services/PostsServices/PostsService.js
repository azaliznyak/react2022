import {axiosService} from "../AxiosService/AxiosService";
import {urls} from "../../configs/urls";

const postsService={
    getAll:(id)=>axiosService.get(`${urls.albums}/${id}`)
}

export {
    postsService
}