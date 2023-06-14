import axios from 'axios';
import urlBase from './urlBase';

const postFetch = axios.create({
    baseURL: `${urlBase}forum`,
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default postFetch;