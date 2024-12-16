import Restaurant from '../../models/Restaurant'
import { List } from './styles'
import { Container } from '../../styles/GlobalStyles'
import RestaurantCard from '../RestaurantCard'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          description={restaurant.description}
          category={restaurant.category}
          avaliation={restaurant.avaliation}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
