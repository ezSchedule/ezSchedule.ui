import axios from 'axios';

const userFetch = axios.create({
    baseURL: "http://localhost:8080/condominium"
})

export default userFetch;