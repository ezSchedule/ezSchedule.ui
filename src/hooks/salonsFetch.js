import axios from 'axios';
import urlBase from './urlBase';

const salonsFetch = axios.create({
    baseURL: `${urlBase}saloons`,
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default salonsFetch;