import { Product } from '../../types'
import { List } from './styles'
import { GlobalContainer } from '../../styles/GlobalStyles'
import ProductCard from '../ProductCard'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <GlobalContainer>
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.foto}
          title={product.nome}
          shortDescription={product.porcao}
          description={product.descricao}
          price={product.preco}
        />
      ))}
    </List>
  </GlobalContainer>
)

export default ProductList
