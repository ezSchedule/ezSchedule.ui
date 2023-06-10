import axios from 'axios';

const userFetch = axios.create({
    baseURL: "http://localhost:8080/users",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default userFetch;