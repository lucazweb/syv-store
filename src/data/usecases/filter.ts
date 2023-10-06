import { Product } from '@/domain/models/product'
import { FilterProducts } from '@/domain/usecases/filter-by-category'

export class Filter implements FilterProducts {
  constructor(private readonly products: Product[]) {}

  byCategory(category: string) {
    return this.products.filter((product) => {
      return product.category === category
    })
  }

  byContent(query: string) {
    return this.products.filter((product) => {
      const regex = new RegExp(query.toLowerCase())

      if (
        (product.name && regex.test(product.name.toLowerCase())) ||
        (product.category && regex.test(product.category.toLowerCase())) ||
        (product.price && regex.test(product.price))
      ) {
        return true
      }
      return false
    })
  }

  byFavorite(favorites: number[]) {
    return this.products.filter((product) => favorites.includes(product.id))
  }
}
