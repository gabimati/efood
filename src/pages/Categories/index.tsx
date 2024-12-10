import ProductsList from '../../components/ProductsList'
import Book from '../../models/Book'

import lucida from '../../assets/images/lucida.png'
import onca from '../../assets/images/onca.png'
import sorte from '../../assets/images/sorte.png'
import passaro from '../../assets/images/passaro.png'
import palavra from '../../assets/images/palavra.png'
import solidao from '../../assets/images/solidao.png'
import adeus from '../../assets/images/adeus.png'
import cabeca from '../../assets/images/cabeca.png'

const promocoes: Book[] = [
  {
    id: 1,
    category: 'Ficção',
    description:
      'Rosa Montero oferece aqui um estudo fascinante sobre as ligações entre criatividade e...',
    title: 'O perigo de estar lúcida',
    system: 'epub',
    infos: ['10%', 'R$ 54,00'],
    image: lucida
  },
  {
    id: 2,
    category: 'Ficção',
    description:
      'Neste romance embebido de lirismo, Micheliny Verunschk joga luz sobre a história de duas...',
    title: 'lucida Evil 4',
    system: 'epub',
    infos: ['5%', 'R$ 57,00'],
    image: onca
  },
  {
    id: 3,
    category: 'Suspense',
    description:
      'Neste livro, Rosa Montero mostra por que é um dos nomes centrais da literatura atual. Com...',
    title: 'A boa sorte',
    system: 'pdf',
    infos: ['10%', 'R$ 63,00'],
    image: sorte
  },
  {
    id: 4,
    category: 'Romance',
    description:
      'romance de estreia de Aline Bei, onde acompanhamos uma mulher que, com todas as forças...',
    title: 'O peso do pássaro morto',
    system: 'epub',
    infos: ['10%', 'R$ 58,00'],
    image: passaro
  }
]

const emBreve: Book[] = [
  {
    id: 5,
    category: 'Romance',
    description:
      'Neste primoroso romance de estreia, acompanhamos a trajetória de Raimundo, homem analfabeto...',
    title: 'A palavra que resta',
    system: 'pdf',
    infos: ['17/05'],
    image: palavra
  },
  {
    id: 6,
    category: 'Fantasia',
    description:
      'Neste clássico de Gabriel García Marques, conheça as fabulosas aventuras dos Buendía-Iguarán...',
    title: 'Cem anos de solidao',
    system: 'pdf',
    infos: ['17/05'],
    image: solidao
  },
  {
    id: 7,
    category: 'Ficção',
    description:
      'Desenvolvido na oficina de Gabriel García Márquez, o romance de Socorro Acioli conta a história de...',
    title: 'A cabeca do Santo',
    system: 'epub',
    infos: ['17/05'],
    image: cabeca
  },
  {
    id: 8,
    category: 'Romance',
    description:
      'Em seu segundo livro, Aline Bei ― autora do premiado O peso do pássaro morto ― constrói um...',
    title: 'Pequena coreografia do adeus',
    system: 'epub',
    infos: ['17/05'],
    image: adeus
  }
]

const Categories = () => (
  <>
    <ProductsList books={promocoes} title="Ficção" background="gray" />
    <ProductsList books={emBreve} title="Suspense" background="black" />
    <ProductsList books={promocoes} title="Aventura" background="gray" />
    <ProductsList books={emBreve} title="Romance" background="black" />
  </>
)

export default Categories
