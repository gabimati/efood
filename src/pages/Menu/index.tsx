import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import { Restaurant } from '../../types'
import { GlobalContainer } from '../../styles/GlobalStyles'

const Menu = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar restaurante.')
        }
        return res.json()
      })
      .then((data: Restaurant) => {
        setRestaurant(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Não foi possível carregar o restaurante.')
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  if (!restaurant) return <p>Restaurante não encontrado.</p>

  return (
    <>
      <Header />
      <Banner
        backgroundImage={restaurant.capa}
        category={restaurant.tipo}
        title={restaurant.titulo}
      />
      <GlobalContainer>
        <ProductList products={restaurant.cardapio} />
      </GlobalContainer>
      <Footer />
    </>
  )
}

export default Menu
