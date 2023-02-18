import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


import { AppContext } from '../App.provider'
import mixins from '../styles/mixins'
import Icon from './icons/Icon'

const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 80px;
position: relative;
box-shadow: 0 -3px 10px black;
${mixins.bgLight};
${mixins.textColor}

a {
  ${mixins.textColor};
}

h1 {
  font-size: 24px;
  line-height: 18px;
  margin-left: 80px;
}

div {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin-right: 70px;

  svg {
    ${mixins.textColor}
  }
}


@media (max-width: 769px) {
  
  h1, div {
    font-size: 14px;
    line-height: 10px;
  }

  h1 {
    margin-left: 17px;
  }

  div {
    margin-right: 17px;

    svg {
      width: 15px;
      height: 15px;
    }

  }
}
`


const Header = () => {
    const {dark, toggleDark} = useContext(AppContext)




  return (
    <StyledHeader className={dark ? 'dark' : ''}>
        <h1><Link to='/'>Where in the World?</Link></h1>
        <div onClick={toggleDark}><Icon name='Moon'/> Dark Mode</div>
    </StyledHeader>
  )
}

export default Header