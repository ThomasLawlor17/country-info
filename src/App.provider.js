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

    const getCountry = cca3 => countries.find(c => (c.cca3 === cca3))

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
                data,
                setData,
                query,
                setQuery,
                filter,
                setFilter,
                filterList,
                getCountry,
            }}>
                {children}
            </AppContext.Provider>
    )
 }


 export default AppProvider