import { Imagem, Titulo, Precos } from './styles'

import bannerIMG from '../../assets/images/banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerIMG})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>O Perigo de Estar Lúcida</Titulo>
        <Precos>
          De <span>R$ 60,00</span> <br />
          por apenas R$ 54,00
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
