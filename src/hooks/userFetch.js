import axios from 'axios';

const userFetch = axios.create({
    baseURL: "http://ec2-18-234-46-137.compute-1.amazonaws.com:8080/users",
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` }
})

export default userFetch;