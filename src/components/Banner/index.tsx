import { BannerContainer, Container } from './styles'

type Props = {
  backgroundImage: string
  category: string
  title: string
}

const Banner = ({ backgroundImage, category, title }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Container className="container">
      <h3>{category}</h3>
      <h2>{title}</h2>
    </Container>
  </BannerContainer>
)

export default Banner
