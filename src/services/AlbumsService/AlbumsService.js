import {axiosService} from "../AxiosService/AxiosService";
import {urls} from "../../configs/urls";

const albumsService={
    getAll:()=>axiosService.get(urls.albums)
}

export {
    albumsService
}