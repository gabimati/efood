export interface Product {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export interface Restaurant {
  id: number
  titulo: string
  tipo: string
  avaliacoes: number
  descricao: string
  capa: string
  cardapio: Product[]
}
