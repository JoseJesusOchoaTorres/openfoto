// Constants
import { Routes } from 'utils/constants'

// Routing
import { useLocation } from 'react-router-dom'

export const useIsFavorites = () => {
  const { pathname } = useLocation()
  return pathname === Routes.favorites
}