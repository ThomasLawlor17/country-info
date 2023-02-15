import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App.provider'

const SearchForm = () => {
    const {query, setQuery, setFilter, filterList} = useContext(AppContext)
    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        </form>
        <select name="filter" onChange={e => setFilter(e.target.value)}>
            <option value="">Filter by Region</option>
            {filterList.map((f, i) => (
                <option key={i} value={f}>{f}</option>
            ))}
        </select>
    </div>
  )
}

export default SearchForm