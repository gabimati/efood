import Product from '../../models/Product'
import { List } from './styles'
import { Container } from '../../styles/GlobalStyles'
import ProductCard from '../ProductCard'

export type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <Container>
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          shortDescription={product.shortDescription}
          description={product.description}
          price={product.price}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
