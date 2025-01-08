import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import CartPopup from '../Cart'
import Logo from '../Logo'

import { GlobalContainer } from '../../styles/GlobalStyles'
import * as S from './styles'

import bannerIMG from '../../assets/images/fundo.svg'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.portion, 0)
  )

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  return (
    <>
      <S.HeaderProfile style={{ backgroundImage: `url(${bannerIMG})` }}>
        <GlobalContainer>
          <S.HeaderContainer>
            <S.LogoWrapper>
              <Logo />
            </S.LogoWrapper>
            <S.StyledLink to="/">
              <h3>Restaurantes</h3>
            </S.StyledLink>
            <S.CartInfo onClick={toggleCart}>
              {totalItems} produto(s) no carrinho
            </S.CartInfo>
          </S.HeaderContainer>
        </GlobalContainer>
      </S.HeaderProfile>

      {isCartOpen && <CartPopup fecharCarrinho={() => setIsCartOpen(false)} />}
    </>
  )
}

export default Header
