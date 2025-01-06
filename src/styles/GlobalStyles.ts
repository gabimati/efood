import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9',
  salmao: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.bege};
  }
`

export const GlobalContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`
