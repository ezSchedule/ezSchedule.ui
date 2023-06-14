import axios from 'axios';
import urlBase from './urlBase';

const reportFetch = axios.create({
    baseURL: `${urlBase}services`,
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default reportFetch;