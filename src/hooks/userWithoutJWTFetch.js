import axios from 'axios';

const userWithoutJWTFetch = axios.create({
    baseURL: "http://localhost:8080/users"
})

export default userWithoutJWTFetch;