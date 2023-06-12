import axios from 'axios';

const reportFetch = axios.create({
    baseURL: "http://ec2-18-234-46-137.compute-1.amazonaws.com:8080/reports",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default reportFetch;