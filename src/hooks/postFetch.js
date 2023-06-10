import axios from 'axios';

const postFetch = axios.create({
    baseURL: "http://localhost:8080/forum",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default postFetch;