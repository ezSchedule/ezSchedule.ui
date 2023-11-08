import axios from 'axios';
import urlBase from './urlBase';

const condominiumFetch = axios.create({
    baseURL: `${urlBase}condominium`
})

export default condominiumFetch;