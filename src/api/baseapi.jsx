import axios from "axios";

const API = axios.create({
    baseURL:'https://dev-cl-api.debutinfotech.in'
})

export default API