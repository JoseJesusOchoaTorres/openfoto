// External libraries
import { createContext, useState } from 'react'

// Contants
import { FilterOptions } from 'utils/constants'

const FilterContext = createContext()
const defaultValue = FilterOptions[0].value

const FilterProvider = (props) => {
  const [filter, setFilter] = useState(defaultValue)
  const value = [filter, setFilter]

  return <FilterContext.Provider value={value} {...props} />
}

export { FilterContext, FilterProvider }