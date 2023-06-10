import axios from 'axios';

const condominiumFetch = axios.create({
    baseURL: "http://localhost:8080/condominium",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default condominiumFetch;