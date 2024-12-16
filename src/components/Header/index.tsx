import logo from '../../assets/images/logo.png'
import bannerIMG from '../../assets/images/fundo.svg'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import CartPopup from '../Cart'
import { StyledLink, Container, HeaderProfile } from './styles'
import { Logo } from '../Footer/styles'

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
        <Container>
          <StyledLink to="/">
            <h3>Restaurantes</h3>
          </StyledLink>
          <Logo>
            <img src={logo} alt="efood" />
          </Logo>
          <h3 onClick={toggleCart} style={{ cursor: 'pointer' }}>
            {totalItems} produto(s) no carrinho
          </h3>
        </Container>
      </HeaderProfile>

      {/* Popup do Carrinho */}
      {isCartOpen && <CartPopup fecharCarrinho={() => setIsCartOpen(false)} />}
    </>
  )
}

export default Header
