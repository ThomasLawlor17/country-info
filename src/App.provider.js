 import React, { useState, useEffect, createContext} from "react";
 import { searchCountries, filterCountries } from "./utils";

 export const AppContext = createContext({
    dark: false,
    toggleDark: () => {},
    countries: [],
    setCountries: () => {},
    data: [],
    setData: () => {},
    selectedCountry: {},
    query: '',
    setQuery: () => {},
    filter: '',
    setFilter: () => {},
    filterList: [],
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
            }}>
                {children}
            </AppContext.Provider>
    )
 }


 export default AppProvider