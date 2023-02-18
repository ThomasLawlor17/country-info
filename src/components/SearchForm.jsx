import { useState } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from '../App.provider'
import mixins from '../styles/mixins'
import Icon from './icons/Icon'


const StyledDiv = styled.div`
display: flex;
justify-content: space-between;

form {
position: relative;
margin: 50px auto 50px 70px;

    .search {
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        left: 32px;
        top: 0;
        bottom: 0;
        width: 13px;
        height: 13px;
        ${mixins.inputTextColor};
    }

    input {
        border: none;
        width: 278px;
        height: 60px;
        border-radius: 10px;
        padding: 0 2px 0 65px; 
        ${mixins.bgLight};
        ${mixins.inputTextColor};

        &::placeholder {
            ${mixins.inputTextColor};
        }

        &:focus-visible {
            outline: none;
        }

    }
}

.select {
    position: relative;
    outline: none;
    border: none;
    border-radius: 10px;
    height: 60px;
    width: 200px;
    ${mixins.bgLight};
    ${mixins.textColor};
    margin: 50px 70px 50px auto;

    select {
        display: none;
    }

    .filter {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        height: 100%;
        padding: 0 20px 0 25px;

        span {
            line-height: 10px;
        }

        svg {
            width: 10px;
            height: 10px;
        }
    }

    ul {
        position: relative;
        width: calc(100% - 25px);
        padding-left: 25px;
        margin: 5px 0;
        ${mixins.bgLight};
        border-radius: 10px;
        z-index: 2;

        option {
            font-size: 16px;
            padding-top: 15px;

            &:first-of-type {
                padding-top: 20px;
            }
            &:last-of-type {
                padding-bottom: 20px;
            }
        }
        .none {
            display: none;
        }
    }

    .hidden {
        visibility: hidden;
    }

    &::after {
        content: '';
        position: absolute;
        
    }
}

@media (max-width: 769px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    form {
        margin: 13px 0 40px 4%;

        input {
            height: 48px;
        }
    }
    .select {
        align-self: flex-start;
        margin: 0 0 32px 4%;
        height: 48px;
    }
}
`


const SearchForm = () => {
    const {query, setQuery, filter, setFilter, filterList} = useContext(AppContext)
    const handleSubmit = e => {
        e.preventDefault()
    }

    const [open, setOpen] = useState(false)

    const handleChooseFilter = (f) => {
        setFilter(f)
        setOpen(false)
    }

  return (
    <StyledDiv>
        <form onSubmit={handleSubmit}>
            <Icon name="Search"/>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='Search for a country...'/>
        </form>
        <div className="select">
            <div className='filter' onClick={() => setOpen(open => !open)}>
                <span>{filter ? filter : 'Filter by Region'}</span>
                <Icon name='Chevron'/>
            </div>
            <ul className={`options ${open ? '' : 'hidden'}`}>
                {filter ? <option onClick={() => handleChooseFilter('')}>All</option> : ''}
                {filterList.map((f, i) => (
                    <option key={i} onClick={() => handleChooseFilter(f)} className={f === filter ? 'none' : ''}>{f}</option>
                ))}
            </ul>
        </div>
    </StyledDiv>
  )
}

export default SearchForm