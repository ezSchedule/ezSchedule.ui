import axios from 'axios';

const salonsFetch = axios.create({
    baseURL: "http://localhost:8080/saloons"
})

export default salonsFetch;