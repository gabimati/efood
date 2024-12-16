import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import restaurantes from '../../data/restaurantes'
import produtos from '../../data/produtos'
import Footer from '../../components/Footer'

const Menu = () => {
  const { id } = useParams<{ id: string }>()

  const restaurant = restaurantes.find(
    (rest) => rest.id === parseInt(id || '', 10)
  )
  const restaurantProducts = produtos.filter((product) =>
    restaurant?.productIds.includes(product.id)
  )

  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>
  }

  return (
    <>
      <Header />
      <Banner
        backgroundImage={restaurant.image}
        category={restaurant.category[0]}
        title={restaurant.title}
      />
      <div style={{ padding: '20px' }}>
        <ProductList products={restaurantProducts} />
      </div>
      <Footer />
    </>
  )
}

export default Menu
