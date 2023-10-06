import { Product } from '../models/product'

export interface FilterProducts {
  byCategory: (category: string) => Product[]
  byContent: (query: string) => Product[]
  byFavorite: (favorites: number[]) => Product[]
}
