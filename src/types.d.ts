export interface Product {
  id: number
  foto: string // URL da imagem do produto
  nome: string // Nome do produto
  descricao: string // Descrição completa do produto
  porcao: string // Informação sobre a porção
  preco: number // Preço do produto
}

export interface Restaurant {
  id: number
  titulo: string // Nome do restaurante
  tipo: string // Tipo de culinária
  avaliacoes: number // Avaliação do restaurante
  descricao: string // Descrição do restaurante
  capa: string // URL da imagem de capa do restaurante
  cardapio: Product[] // Lista de produtos do restaurante
}
