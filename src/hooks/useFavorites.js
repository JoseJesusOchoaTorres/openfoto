// External libraries
import { useCallback } from 'react'

// Utils
import { localStorageSetter, localStorageGetter } from 'utils/storage/localStorage'

export const useFavorites = () => {
  const isInFavorites = useCallback(
    (imageId) => !!localStorageGetter('favorites') ?
      localStorageGetter('favorites')?.some((element) => element.id === imageId) :
      false
    , []
  )

  const addToFavorites = useCallback(imageData => {
    const favorites = localStorageGetter('favorites') || []

    localStorageSetter('favorites', [...favorites, imageData])
  }, [])

  const removeFromFavorites = useCallback(imageId => {
    const newFavorites = localStorageGetter('favorites')
      .filter((element) => element.id !== imageId)

    localStorageSetter('favorites', newFavorites)
  }, [])

  const toggleFavorites = useCallback(imageData => {
    const isFavorited = isInFavorites(imageData.id)

    isFavorited ?
      removeFromFavorites(imageData.id) :
      addToFavorites(imageData)
  }, [addToFavorites, isInFavorites, removeFromFavorites])

  return { addToFavorites, removeFromFavorites, toggleFavorites, isInFavorites }
}