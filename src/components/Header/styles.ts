import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'
import { Link } from 'react-router-dom'

export const HeaderProfile = styled.header`
  width: 100%;
  height: 162px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const LogoWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: bold;
`

export const CartInfo = styled.h3`
  cursor: pointer;
  color: ${cores.salmao};
  font-size: 18px;
  text-align: right;
`
