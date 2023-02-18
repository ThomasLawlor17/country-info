 import React, { useState, useEffect, createContext} from "react";
 import { searchCountries, filterCountries } from "./utils";

 export const AppContext = createContext({
    dark: false,
    toggleDark: () => {},
    countries: [],
    setCountries: () => {},
    data: [],
    setData: () => {},
    query: '',
    setQuery: () => {},
    filter: '',
    setFilter: () => {},
    filterList: [],
    getCountry: () => {},
 })

 const AppProvider = ({children}) => {
    const [dark, setDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
    const [countries, setCountries] = useState([])
    const [v3Countries, setV3Countries] = useState([])
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState('')
    const [filterList] = useState([
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Polar'
    ])

    const toggleDark = () => setDark(dark => !dark)

    const getCountry = code => countries.find(c => (c.alpha3Code === code))
    const getV3Country = code => v3Countries.find(c => (c.cca3 === code))

    useEffect(() => {
        const filtered = filterCountries(countries, filter)
        const results = searchCountries(filtered, query)
        setData(results)
    }, [countries, query, filter])

    return (
        <AppContext.Provider
            value={{
                dark,
                toggleDark,
                countries,
                setCountries,
                v3Countries,
                setV3Countries,
                data,
                setData,
                query,
                setQuery,
                filter,
                setFilter,
                filterList,
                getCountry,
                getV3Country,
            }}>
                {children}
            </AppContext.Provider>
    )
 }


 export default AppProvider