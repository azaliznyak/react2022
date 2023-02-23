import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postsService={
getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsService
}