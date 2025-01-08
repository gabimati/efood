import styled from 'styled-components'

import { breakpoints, cores } from '../../styles/GlobalStyles'

export const Banner = styled.header`
  width: 100%;
  height: 360px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 140px;

    @media (max-width: ${breakpoints.desktop}) {
      gap: 80px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      gap: 80px;
    }
  }
`

export const Title = styled.h1`
  width: 540px;
  color: ${cores.salmao};
  font-weight: bold;
  font-size: 36px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 400px; /* Reduz a largura */
    font-size: 30px; /* Diminui o tamanho da fonte */
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    font-size: 30px; /* Fonte menor */
    padding: 0 16px; /* Adiciona espaçamento lateral */
  }
`
