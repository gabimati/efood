import { Product } from '../../types'
import { GlobalContainer } from '../../styles/GlobalStyles'
import ProductCard from '../ProductCard'

import { List } from './styles'

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
          description={product.descricao}
          portion={product.porcao}
          price={product.preco}
        />
      ))}
    </List>
  </GlobalContainer>
)

export default ProductList
