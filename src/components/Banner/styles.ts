import styled from 'styled-components'
import { breakpoints, cores } from '../../styles/GlobalStyles'

export const BannerImage = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
`

export const BannerContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 30px;
  color: ${cores.branca};

  h3 {
    font-weight: 100;
    margin: 0;
  }

  h2 {
    font-weight: bold;
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }
`
