import { useContext } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { AppContext } from '../App.provider'

import CountriesGrid from '../components/CountriesGrid'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import { darkTheme, lightTheme } from '../styles/theme'
import mixins from '../styles/mixins'

const StyledMain = styled.main`
${mixins.bgDark};
min-height: calc(100vh - 120px);
padding-bottom: 40px;
`

const CountryIndex = () => {
    const {dark} = useContext(AppContext)

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
    <>
    <Header/>
    <StyledMain>
    <SearchForm/>
    <CountriesGrid/>
    </StyledMain>
    </>
    </ThemeProvider>
  )
}

export default CountryIndex