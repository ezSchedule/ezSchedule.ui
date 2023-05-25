import axios from 'axios';

const postFetch = axios.create({
    baseURL: "http://localhost:8080/forum"
})

export default postFetch;