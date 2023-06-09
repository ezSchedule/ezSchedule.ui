import axios from 'axios';

const scheduleFetch = axios.create({
    baseURL: "http://localhost:8080/schedules"
})

export default scheduleFetch;