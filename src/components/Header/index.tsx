import { useState } from 'react'
import { useSelector } from 'react-redux'

import bannerIMG from '../../assets/images/fundo.svg'

import { RootState } from '../../store'
import CartPopup from '../Cart'
import Logo from '../Logo'

import { GlobalContainer } from '../../styles/GlobalStyles'
import {
  StyledLink,
  HeaderContainer,
  HeaderProfile,
  CartInfo,
  LogoWrapper
} from './styles'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  )

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  return (
    <>
      <HeaderProfile style={{ backgroundImage: `url(${bannerIMG})` }}>
        <GlobalContainer>
          <HeaderContainer>
            <StyledLink to="/">
              <h3>Restaurantes</h3>
            </StyledLink>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <CartInfo onClick={toggleCart}>
              {totalItems} produto(s) no carrinho
            </CartInfo>
          </HeaderContainer>
        </GlobalContainer>
      </HeaderProfile>

      {isCartOpen && <CartPopup fecharCarrinho={() => setIsCartOpen(false)} />}
    </>
  )
}

export default Header
