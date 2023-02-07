import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const commentService={
    getAll:()=>axiosService.get(urls.comments),
    create:(newComment)=>axiosService.post(urls.comments,newComment)

}

export {commentService}