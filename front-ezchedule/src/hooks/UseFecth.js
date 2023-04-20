import axios from "axios";

    const useFetch = axios.create({
        baseURL: "https://643b5adc70ea0e660292ea14.mockapi.io/payments/payment"
    })

export default useFetch;