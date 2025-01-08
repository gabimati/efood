import Logo from '../Logo'

import * as S from './styles'

import instagram from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'

const Footer = () => (
  <S.FooterContainer>
    <S.LogoWrapper>
      <Logo />
    </S.LogoWrapper>
    <S.SocialIcons>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </S.SocialIcons>

    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.FooterContainer>
)

export default Footer
