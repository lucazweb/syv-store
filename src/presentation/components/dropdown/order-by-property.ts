import { Product } from '@/domain/models/product'

export const orderByProperty = (key: string, products: Product[]) => {
  return products.slice().sort((a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  })
}
