import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import bannerIMG from '../../assets/images/fundo.svg'

const Hero = () => (
  <S.Banner style={{ backgroundImage: `url(${bannerIMG})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </div>
  </S.Banner>
)

export default Hero
