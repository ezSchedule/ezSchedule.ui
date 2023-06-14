import axios from 'axios';
import urlBase from './urlBase';

const scheduleFetch = axios.create({
    baseURL: `${urlBase}schedules`,
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default scheduleFetch;