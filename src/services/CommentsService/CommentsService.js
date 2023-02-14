import {axiosService} from "../AxiosService/AxiosService";
import {urls} from "../../configs/urls";

const commentsService={
    getAll:()=>axiosService.get(urls.comments)
}

export {
    commentsService
}