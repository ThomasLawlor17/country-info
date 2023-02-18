import {css} from 'styled-components'


const mixins = {
    textColor: css`
    color: ${({theme}) => theme.text};
    `,
    inputTextColor: css`
    color: ${({theme}) => theme.textLight};    
    `,
    bgLight: css`
    background-color: ${({theme}) => theme.items};
    `,
    bgDark: css`
    background-color: ${({theme}) => theme.bg};
    `,
    boxShadow: css`
    ${({theme}) => theme.boxShadow}
    `,
    boxShadowLight: css`
    ${({theme}) => theme.boxShadowLight}`
}

export default mixins