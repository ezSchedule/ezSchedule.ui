import axios from 'axios';
import urlBase from './urlBase';

const userWithoutJWTFetch = axios.create({
    baseURL: `${urlBase}users`
})

export default userWithoutJWTFetch;