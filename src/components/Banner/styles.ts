import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'

export const Container = styled.div`
  padding: 40px 170px;
  display: flex;
  justify-content: space-between;
`
export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.4); /* Cor de sobreposição */
  background-blend-mode: darken;

  .container {
    height: 100%;
    color: ${cores.branca};
    flex-direction: column;
    font-size: 32px;
  }

  h3 {
    font-weight: 100;
  }

  h2 {
    font-weight: bold;
  }
`
