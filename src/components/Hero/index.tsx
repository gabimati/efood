import { Link } from 'react-router-dom'

import { Banner, Titulo } from './styles'

import logo from '../../assets/images/logo.png'
import bannerIMG from '../../assets/images/fundo.svg'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerIMG})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Banner>
)

export default Hero
