import styled from 'styled-components'

import { cores } from '../../styles/GlobalStyles'

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
  }
`

export const Titulo = styled.h1`
  width: 540px;
  color: ${cores.salmao};
  font-weight: bold;
  font-size: 36px;
  text-align: center;
`
