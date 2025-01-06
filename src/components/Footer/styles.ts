import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${cores.begeEscuro};
  margin-top: 120px;
`

export const LogoWrapper = styled.div`
  max-width: 125px;
  margin: 0 auto;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px auto 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Text = styled.p`
  margin: 0 auto;
  color: ${cores.salmao};
  font-size: 10px;
  text-align: center;
  font-weight: 400;
  line-height: normal;
  max-width: 480px;
`
