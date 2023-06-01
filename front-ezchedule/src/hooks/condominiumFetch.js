import axios from 'axios';

const condominiumFetch = axios.create({
    baseURL: "http://localhost:8080/condominium"
})

export default condominiumFetch;