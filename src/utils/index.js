export const searchCountries = (countries, query) => {
    if (!query) {
        return countries
    }
    const results = countries.filter(c => {
        return c.name.common.toLowerCase().includes(query.toLowerCase()) || c.name.official.toLowerCase().includes(query.toLowerCase())
    }) 
    return results
}

export const filterCountries = (countries, filter) => {
    if (!filter) {
        return countries
    }
    return countries.filter(c => c.region === filter)
}