import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'a70b620c06d66e4032de2cd4718c322e',
        language: 'en-US',
        page: 1
    }
})

export default api