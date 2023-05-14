import axios from 'axios';

const graphicFetch = axios.create({
    baseURL: "http://localhost:8080/schedules"
})

export default graphicFetch;