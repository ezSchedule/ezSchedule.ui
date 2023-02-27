import { useState, useEffect } from "react";
import axios from "axios";


function UseFecth() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('viacep.com.br/ws/01001000/json/')
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    })
}

export default UseFecth