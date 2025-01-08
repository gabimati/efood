import styled from 'styled-components'
import { breakpoints } from '../../styles/GlobalStyles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;

`
