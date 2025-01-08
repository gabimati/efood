import { GlobalContainer } from '../../styles/GlobalStyles'
import * as S from './styles'

type Props = {
  backgroundImage: string
  category: string
  title: string
}

const Banner = ({ backgroundImage, category, title }: Props) => (
  <S.BannerImage style={{ backgroundImage: `url(${backgroundImage})` }}>
    <GlobalContainer>
      <S.BannerContainer>
        <h3>{category}</h3>
        <h2>{title}</h2>
      </S.BannerContainer>
    </GlobalContainer>
  </S.BannerImage>
)

export default Banner
