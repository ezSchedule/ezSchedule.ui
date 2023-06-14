import axios from 'axios';
import urlBase from './urlBase';

const userFetch = axios.create({
    baseURL: `${urlBase}users`,
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default userFetch;