// External libraries
import { createContext, useState } from 'react'

const SearchContext = createContext()

const SearchProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState('black and white')
  
  const value = {
    searchQuery,
    setSearchQuery,
  }

  return <SearchContext.Provider value={value} {...props} />
}

export { SearchContext, SearchProvider }