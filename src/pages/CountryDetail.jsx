import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { AppContext } from '../App.provider'

const CountryDetail = () => {
    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const {getCountry} = useContext(AppContext)


    const [country, setCountry] = useState()

    useEffect(() => {
        const result = getCountry(id.toUpperCase())
        setCountry(result)
    }, [getCountry, location])

  return (
    <div>
        <button onClick={() => navigate(-1)}>Go Back</button>

        {country ? country.name.common : ''}

        <ul>
            {country && country.borders ? country.borders.map((bc, i) => (
                <li key={i}><Link to={`/${bc.toLowerCase()}`}>{bc}</Link></li>
            ))
        :
        ''
        }
        </ul>
    </div>
  )
}

export default CountryDetail