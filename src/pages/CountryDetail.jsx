import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../App.provider'

const CountryDetail = () => {
    const {id} = useParams()
    const {getCountry} = useContext(AppContext)

    const [country, setCountry] = useState(getCountry(id.toUpperCase()))

    useEffect(() => {
        setCountry(getCountry(id.toUpperCase()))
    }, [getCountry])

  return (
    <div>
        {country.name.common}
    </div>
  )
}

export default CountryDetail