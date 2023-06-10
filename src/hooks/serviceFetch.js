import axios from 'axios';

const reportFetch = axios.create({
    baseURL: "http://localhost:8080/services",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default reportFetch;