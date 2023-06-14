import axios from 'axios';
import urlBase from './urlBase';

const condominiumFetch = axios.create({
    baseURL: `${urlBase}condominium`,
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default condominiumFetch;