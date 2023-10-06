import { FavoritesStorage } from '@/data/usecases/favorites-storage'
import { mockLocalStorage } from '@/tests/data/mocks/mock-local-storage'
import { faker } from '@faker-js/faker'

mockLocalStorage()

const localStorageKey = 'synvia-store'

const makeSut = () => {
  return new FavoritesStorage(localStorageKey)
}

describe('FavoritesStorage tests', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  test('should save productId when save method is called', () => {
    const storage = makeSut()
    const productId = 1234
    storage.save(productId)
    const result = localStorage.getItem(localStorageKey)
    expect(result).toBeTruthy()
    expect(JSON.parse(result).includes(productId)).toBeTruthy()
  })

  test('should remove productId when save method is called', () => {
    const storage = makeSut()
    const productId = 1234
    storage.save(productId)
    storage.remove(productId)
    const result = localStorage.getItem(localStorageKey)
    expect(result).toBeTruthy()
    expect(JSON.parse(result).includes(productId)).toBeFalsy()
  })

  test('should return true for existent productId when checkFavorite method is called', () => {
    const storage = makeSut()
    const productId = 1234
    storage.save(productId)
    expect(storage.checkFavorite(productId)).toBeTruthy()
  })
})
