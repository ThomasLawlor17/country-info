import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../App.provider'
import mixins from '../styles/mixins'

const StyledGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
align-items: center;
justify-content: center;
grid-gap: 70px;
margin: 0 70px;

a {
    position: relative;
    width: 100%;
    ${mixins.bgLight};
    border-radius: 10px;
    overflow: hidden;
    ${mixins.textColor};
    box-shadow: 0 0 6px ${mixins.boxShadow};

    img {
        width: 100%;
        height: 160px;
    }
    .info {
        padding: 25px;

        h2 {
            font-size: 18px;
        }
        ul {
            li {
                font-weight: 200;
                font-size: 14px;
                padding-bottom: 8px;

                span {
                    font-weight: 600;
                }
            }
        }
    }
}
@media (max-width: 769px) {
    margin: 0 54px;
    grid-gap: 40px;


    li {
        padding-bottom: 15px;
    }
}

`


const CountriesGrid = () => {
    const {dark, data} = useContext(AppContext)

  return (
    <StyledGrid className={dark ? 'dark' : ''}>
        {data.map((d, i) => (
            <Link to={`/${d.alpha3Code.toLowerCase()}`} key={i}>
                <img src={d.flags.png} alt="" />
                <div className="info">
                    <h2>{d.name}</h2>
                    <ul>
                        <li><span>Population: </span>{Number(d.population).toLocaleString().split(/\s/).join(',')}</li>
                        <li><span>Region: </span>{d.region}</li>
                        <li><span>Capital: </span>{d.capital}</li>
                    </ul>
                </div>
            </Link>
        ))}
    </StyledGrid>
  )
}

export default CountriesGrid