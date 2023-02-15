import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App.provider'

const CountriesGrid = () => {
    const {data} = useContext(AppContext)

  return (
    <div>
        {data.map((d, i) => (
            <Link to={`/${d.cca3.toLowerCase()}`} key={i}>{d.name.common}</Link>
        ))}
    </div>
  )
}

export default CountriesGrid