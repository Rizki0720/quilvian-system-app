import axios from "axios";

const InstanceAxios = axios.create({
    baseURL:"https://192.168.15.217:7079/api",
})

export default InstanceAxios