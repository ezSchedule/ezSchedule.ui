import axios from 'axios';

const reportFetch = axios.create({
    baseURL: "http://localhost:8080/reports"
})

export default reportFetch;