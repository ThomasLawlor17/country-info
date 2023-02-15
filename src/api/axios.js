import axios from "axios";

export const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'

})

export const getCountries = async () => {
    const res = await api.get('/all')
    return res.data
}