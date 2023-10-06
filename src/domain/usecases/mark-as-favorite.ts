export interface FavoritesProducts {
  save: (id: number) => void
  remove: (id: number) => void
  checkFavorite: (id: number) => boolean
}
