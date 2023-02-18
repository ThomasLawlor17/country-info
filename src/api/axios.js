import axios from "axios";

export const v2 = axios.create({
    baseURL: 'https://restcountries.com/v2/'
})

export const v3 = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
})

export const getV2Countries = async () => {
    const res = await v2.get('all')
    return res.data
}

export const getV3Countries = async () => {
    const res = await v3.get('all')
    return res.data
}