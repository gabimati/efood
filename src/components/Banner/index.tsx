import { GlobalContainer } from '../../styles/GlobalStyles'
import { BannerContainer, BannerImage } from './styles'

type Props = {
  backgroundImage: string
  category: string
  title: string
}

const Banner = ({ backgroundImage, category, title }: Props) => (
  <BannerImage style={{ backgroundImage: `url(${backgroundImage})` }}>
    <GlobalContainer>
      <BannerContainer>
        <h3>{category}</h3>
        <h2>{title}</h2>
      </BannerContainer>
    </GlobalContainer>
  </BannerImage>
)

export default Banner
