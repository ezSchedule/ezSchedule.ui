import axios from 'axios';

const httpFetch = axios.create({
    baseURL: "http://10.18.32.241:8080"
})

export default httpFetch;