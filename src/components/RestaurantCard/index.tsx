import { Link } from 'react-router-dom'

import Tag from '../Tag'
import star from '../../assets/icons/star.png'

import * as S from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  category: string | string[]
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
  const categories = Array.isArray(category) ? category : [category]

  return (
    <S.Card>
      <S.ImgContainer>
        <Link to={`/restaurant/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </S.ImgContainer>
      <S.Container>
        <S.Category>
          {categories.map((cat) => (
            <Tag key={cat}>{cat}</Tag>
          ))}
        </S.Category>
        <S.Info>
          <S.AvaliationTitle>{title}</S.AvaliationTitle>
          <S.AvaliationTitle>
            {avaliation}
            <img src={star} alt="estrela" />
          </S.AvaliationTitle>
        </S.Info>
        <S.Description>{description}</S.Description>
        <Link to={`/restaurant/${id}`}>
          <S.Button>Ver Cardápio</S.Button>
        </Link>
      </S.Container>
    </S.Card>
  )
}

export default RestaurantCard
