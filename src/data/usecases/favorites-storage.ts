import { FavoritesProducts } from '@/domain/usecases/mark-as-favorite'

export class FavoritesStorage implements FavoritesProducts {
  constructor(private readonly localStorageKey: string) {}

  save(id: number) {
    const data = localStorage.getItem(this.localStorageKey)
    if (data) {
      const favorites = JSON.parse(data)
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify([...favorites, id])
      )
      return
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify([id]))
  }

  remove(id: number) {
    const data = localStorage.getItem(this.localStorageKey)
    const favorites = JSON.parse(data)
    const updated = favorites.filter((item: number) => item !== id)
    localStorage.setItem(this.localStorageKey, JSON.stringify(updated))
  }

  checkFavorite(id: number) {
    const data = localStorage.getItem(this.localStorageKey)
    if (data) {
      const favorites = JSON.parse(data)
      return !!favorites.find((item: number) => item === id)
    }
    return false
  }
}
