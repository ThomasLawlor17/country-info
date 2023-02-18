import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
}

`