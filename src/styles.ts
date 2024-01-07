import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, Helvetica, sans-serif;
}

body {
    background-color: #eee;
}
`

export default EstiloGlobal