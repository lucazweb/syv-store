import { makeProductList } from '@/tests/utils'
import { Filter } from '@/data/usecases/filter'
import { mockLocalStorage } from '@/tests/data/mocks/mock-local-storage'
import { FavoritesStorage } from '@/data/usecases/favorites-storage'

mockLocalStorage()

const makeSut = (productsLength: number) => {
  const products = makeProductList(productsLength)
  return {
    filter: new Filter(products),
    products,
  }
}

describe('FilterProduct tests', () => {
  afterEach(() => {
    window.localStorage.clear()
  })
  test('should filter products by category', () => {
    const { filter, products } = makeSut(6)
    const { category } = products[0]
    const categoryCount = products.filter((p) => p.category === category).length
    expect(filter.byCategory(category).length).toEqual(categoryCount)
  })

  test('should filter products by query name', () => {
    const { filter, products } = makeSut(4)
    const { name } = products[0]
    const count = products.filter((p) => p.name === name).length

    expect(filter.byContent(name)).toHaveLength(count)
  })

  test('should filter products by query category', () => {
    const { filter, products } = makeSut(4)
    const { category } = products[0]
    const count = products.filter((p) => p.category === category).length

    expect(filter.byContent(category)).toHaveLength(count)
  })

  test('should filter products by query price', () => {
    const { filter, products } = makeSut(4)
    const { price } = products[0]
    const count = products.filter((p) => p.price === price).length

    expect(filter.byContent(price)).toHaveLength(count)
  })

  test('should filter products by favorites', () => {
    const localStorageKey = 'synvia-store'
    const storage = new FavoritesStorage(localStorageKey)

    const { filter, products } = makeSut(3)
    const ids = products.map((p) => p.id)

    ids.forEach((id: number) => {
      storage.save(id)
    })

    const favorites = JSON.parse(localStorage.getItem(localStorageKey))

    const updated = filter.byFavorite(favorites)
    expect(updated).toHaveLength(ids.length)
  })
})
