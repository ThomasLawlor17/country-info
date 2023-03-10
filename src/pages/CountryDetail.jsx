import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import { AppContext } from '../App.provider'
import Header from '../components/Header'
import Icon from '../components/icons/Icon'
import { GlobalStyle } from '../styles/GlobalStyle'
import mixins from '../styles/mixins'
import { darkTheme, lightTheme } from '../styles/theme'

const StyledMain = styled.main`
${mixins.bgDark};
min-height: calc(100vh - 160px);
display: flex;
flex-direction: column;
padding: 80px 70px 0 70px; 
gap: 80px;

${mixins.textColor};

.back-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    align-self: flex-start;
    padding: 11px 24px;
    border-radius: 4px;
    ${mixins.bgLight}; 
    box-shadow: 0 0 10px ${mixins.boxShadowLight};

    span {
        letter-spacing: 1px;
        font-size: 16px;
        font-weight: 400;
    }
}

.country-info {
    width: 100%;
    display: flex;
    @media (min-width: 770px) {
        justify-content: center;
        gap: 120px;
    }

    img {
        max-width: 560px;
        max-height: 400px;
        min-width: 38%
    }

    @media (min-width: 770px) {
        span {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            max-width: 600px;
        }

        h2 {
            font-size: 32px;
            margin-top: 46px;
            margin-bottom: 40px;
        }
    }

    .info-top {
        margin: 0;
    }
    .info-b {
        margin: 0;
    }
    .info-top, .info-b {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            display: flex;
            gap: 5px;
        }

        span {
            font-weight: 600;
        }
    }

    @media (min-width: 770px) {
        span.bottom {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            margin-top: 40px;
            max-width: 600px;
            overflow-x: scroll;
            position: relative;

            &::scrollbar {
                color: red;
                background-color: red;
            }

            h3 {
                font-size: 16px;
                white-space: nowrap;
            }
        }
    }

    .borders {
        @media(max-width: 769px) {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        }
        display: flex;
        gap: 9px;

        @media (min-width: 770px) {
            margin: 0;
        }


        li {
            ${mixins.bgLight};
            border-radius: 4px;
            width: 96px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 6px ${mixins.boxShadow};
            overflow-x: hidden;

            a {
            ${mixins.textColor};
            font-size: 12px;
            text-align: center;
            }
        }
    }
}

@media (max-width: 769px) {
    gap: 64px;
    padding: 40px 26px;

    .country-info {
        flex-direction: column;

        img {
            max-width: 320px;
            max-height: 230px;
            margin-bottom: 50px;
        }
        .info-top {
            margin: 30px 0 45px 0;
        }
        .info-b {
            margin: 0 0 45px 0;
        }
    }
}

`



const CountryDetail = () => {
    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const {dark, getCountry, getV3Country} = useContext(AppContext)


    const [country, setCountry] = useState()
    const [borderCountries, setBorderCountries] = useState([])

    useEffect(() => {
        const result = getCountry(id.toUpperCase())
        setCountry(result)
        const borderResult = result.borders.map(b => getV3Country(b))
        setBorderCountries(borderResult)
    }, [getCountry, location])

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle/>
    <>
    <Header/>
    <StyledMain>
        <div onClick={() => navigate(-1)} className='back-btn'><Icon name='Back'/><span>Back</span></div>
        <div className="country-info">
            {country ? 
            <>
            <img src={country.flags.png} alt="" />
            <div className="info">
            <h2>{country.name}</h2>
            <span>
            <ul className="info-top">
                <li><span>Native Name: </span>{country.nativeName}</li>
                <li><span>Population: </span>{country.population}</li>
                <li><span>Region: </span>{country.region}</li>
                <li><span>Sub Region: </span>{country.subregion}</li>
                <li><span>Capital: </span>{country.capital}</li>
            </ul>
            <ul className="info-b">
                <li><span>Top Level Domain: </span>{country.topLevelDomain}</li>
                <li><span>Currencies: </span>{country.currencies.map(c => c.name)}</li>
                <li><span>Languages: </span>{country.languages.map(l => l.name).join(', ')}</li>
            </ul>
            </span>
            <span className='bottom'>
            <h3>Border Countries:</h3>
        <ul className='borders'>
            {country && borderCountries && country.borders ? borderCountries.map((bc, i) => (
                <li key={i}><Link to={`/${bc.cca3.toLowerCase()}`}>{bc.name.common}</Link></li>
            ))
        :
        <span>No Border Countries</span>
        }
        </ul>
        </span>
        </div>
        </>
 : ''}
        </div>
    </StyledMain>
    </>
    </ThemeProvider>
  )
}

export default CountryDetail