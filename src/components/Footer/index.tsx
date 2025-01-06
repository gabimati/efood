import { SocialLinks } from '../../utils/list'

import Logo from '../Logo'

import { FooterContainer, SocialIcons, Text, LogoWrapper } from './styles'

const Footer = () => (
  <FooterContainer>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer
