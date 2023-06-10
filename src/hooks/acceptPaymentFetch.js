import axios from 'axios';

const acceptPaymentFetch = axios.create({
    baseURL: "localhost:8080/reports"
})

export default acceptPaymentFetch;