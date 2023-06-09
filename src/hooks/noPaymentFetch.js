import axios from 'axios';

const noPaymentFetch = axios.create({
    baseURL: "http://localhost:8080/reports/condominium/no-payment"
})

export default noPaymentFetch;