import { useState, useEffect } from 'react'
import { List } from './styles'
import { GlobalContainer } from '../../styles/GlobalStyles'
import RestaurantCard from '../RestaurantCard'
import { Restaurant } from '../../types'

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar restaurantes.')
        }
        return res.json()
      })
      .then((data: Restaurant[]) => {
        setRestaurants(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Não foi possível carregar os restaurantes.')
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <GlobalContainer>
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.capa}
            title={restaurant.titulo}
            description={restaurant.descricao}
            category={restaurant.tipo}
            avaliation={
              restaurant.avaliacoes ? restaurant.avaliacoes.toFixed(1) : 'N/A'
            }
          />
        ))}
      </List>
    </GlobalContainer>
  )
}

export default RestaurantsList
