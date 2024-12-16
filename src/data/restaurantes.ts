import sushi from '../assets/images/sushi.png'
import trattoria from '../assets/images/trattoria.png'
import classic from '../assets/images/classic.jpg'
import curry from '../assets/images/curry.jpg'
import ribeye from '../assets/images/ribeye.jpg'
import croissant from '../assets/images/croissant.jpg'

const restaurantes = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: ['Destaque da semana', 'Japonesa'],
    avaliation: '4.9',
    productIds: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 2,
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: ['Italiana'],
    avaliation: '4.7',
    productIds: [7, 8, 9, 10, 11, 12]
  },
  {
    id: 3,
    image: classic,
    title: 'Burger World',
    description: `Descubra hambúrgueres artesanais feitos com os melhores ingredientes! Combinações clássicas e inovadoras para agradar todos os gostos. Cada mordida é uma explosão de sabor, entregue fresquinha na sua casa. Experimente o mundo dos hambúrgueres sem sair do sofá!`,
    category: ['Hamburguer'],
    avaliation: '4.8',
    productIds: [13, 14, 15, 16]
  },
  {
    id: 4,
    image: ribeye,
    title: 'The Steakhouse',
    description: `Cortes nobres de carnes, preparados no ponto perfeito para você! Saboreie steaks suculentos, costelas defumadas e acompanhamentos deliciosos. Experiência de churrasco premium entregue no conforto do seu lar. A excelência em carnes está a um clique!`,
    category: ['Churrascaria'],
    avaliation: '4.6',
    productIds: [17, 18, 19, 20]
  },
  {
    id: 5,
    image: curry,
    title: 'Masala Kitchen',
    description: `Explore os sabores intensos e exóticos da culinária indiana! Curries aromáticos, naan fresquinho e especiarias marcantes que fazem cada prato ser inesquecível. Leve a magia da Índia para a sua mesa com nosso delivery especial!`,
    category: ['Indiana'],
    avaliation: '4.5',
    productIds: [21, 22, 23, 24]
  },
  {
    id: 6,
    image: croissant,
    title: 'Café Paris',
    description: `Descubra o charme dos sabores franceses no conforto da sua casa! Croissants fresquinhos, sobremesas sofisticadas e quiches irresistíveis. Uma experiência de café parisiense com qualidade e praticidade. Viva a elegância francesa no seu dia a dia!`,
    category: ['Café e Lanches'],
    avaliation: '4.9',
    productIds: [25, 26, 27, 28]
  }
]

export default restaurantes
