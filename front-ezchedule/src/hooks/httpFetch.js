import axios from 'axios';

const httpFetch = axios.create({
    //baseURL: "http://10.18.32.241:8080"
    baseURL: "http://192.168.0.108:8080"
})

export default httpFetch;