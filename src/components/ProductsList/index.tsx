import Book from '../../models/Book'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  books: Book[]
}

const ProductsList = ({ background, title, books }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {books.map((book) => (
          <Product
            key={book.id}
            category={book.category}
            description={book.description}
            image={book.image}
            infos={book.infos}
            system={book.system}
            title={book.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
