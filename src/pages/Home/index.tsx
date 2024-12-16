import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import restaurantes from '../../data/restaurantes' // Dados de restaurantes

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurantes} />
    <Footer />
  </>
)

export default Home
