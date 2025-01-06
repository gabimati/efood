import { Link } from 'react-router-dom'
import Tag from '../Tag'
import star from '../../assets/icons/star.png'
import {
  Card,
  TituloAvaliacao,
  Descricao,
  Categoria,
  Info,
  Botao,
  Container,
  ImgContainer
} from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  category: string | string[] // Pode ser string ou array
  avaliation: string
}

const RestaurantCard = ({
  id,
  image,
  title,
  description,
  category,
  avaliation
}: Props) => {
  // Certifique-se de que category seja um array
  const categories = Array.isArray(category) ? category : [category]

  return (
    <Card>
      <ImgContainer>
        <Link to={`/restaurant/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </ImgContainer>
      <Container>
        <Categoria>
          {categories.map((cat) => (
            <Tag key={cat}>{cat}</Tag>
          ))}
        </Categoria>
        <Info>
          <TituloAvaliacao>{title}</TituloAvaliacao>
          <TituloAvaliacao>
            {avaliation}
            <img src={star} alt="estrela" />
          </TituloAvaliacao>
        </Info>
        <Descricao>{description}</Descricao>
        <Link to={`/restaurant/${id}`}>
          <Botao>Ver Cardápio</Botao>
        </Link>
      </Container>
    </Card>
  )
}

export default RestaurantCard
