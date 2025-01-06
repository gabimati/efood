import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'
import { GlobalContainer } from '../../styles/GlobalStyles'

const Home = () => (
  <>
    <Hero />
    <GlobalContainer>
      <RestaurantsList />
    </GlobalContainer>
    <Footer />
  </>
)

export default Home
