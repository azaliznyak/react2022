import axios from "axios";
import {baseURL} from "../configes/urls";

const axiosService=axios.create({baseURL});

export {axiosService}