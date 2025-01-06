class Restaurant {
  id: number
  image: string
  title: string
  description: string
  category: string[]
  avaliation: string
  productIds: number[]

  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    category: string[],
    avaliation: string,
    productIds: number[]
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.category = category
    this.avaliation = avaliation
    this.productIds = productIds
  }
}

export default Restaurant
