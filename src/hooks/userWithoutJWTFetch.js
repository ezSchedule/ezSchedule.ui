import axios from 'axios';

const userWithoutJWTFetch = axios.create({
    baseURL: "http://ec2-18-234-46-137.compute-1.amazonaws.com:8080/users"
})

export default userWithoutJWTFetch;