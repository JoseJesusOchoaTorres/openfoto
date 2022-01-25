// External libraries
import { createContext, useState } from 'react'

const PhotosContext = createContext()

const PhotosProvider = (props) => {
  const [photosByQuery, setPhotosByQuery] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  
  const value = {
    photosByQuery,
    searchQuery,
    setPhotosByQuery,
    setSearchQuery,
  }

  return <PhotosContext.Provider value={value} {...props} />
}

export { PhotosContext, PhotosProvider }