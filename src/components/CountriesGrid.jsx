import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App.provider'

const CountriesGrid = () => {
    const {data} = useContext(AppContext)

  return (
    <div>
        {data.map((d, i) => (
            <div key={i}>{d.name.common}</div>
        ))}
    </div>
  )
}

export default CountriesGrid