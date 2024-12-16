import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'
import { Link } from 'react-router-dom'

export const HeaderProfile = styled.header`
  width: 100%;
  height: 162px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
`

export const Container = styled.div`
  padding: 40px 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.salmao};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:active {
    color: inherit;
  }
`
