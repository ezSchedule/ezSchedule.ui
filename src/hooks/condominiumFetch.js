import axios from 'axios';

const condominiumFetch = axios.create({
    baseURL: "http://ec2-18-234-46-137.compute-1.amazonaws.com:8080/condominium",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default condominiumFetch;