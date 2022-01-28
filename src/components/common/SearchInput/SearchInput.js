// External libraries
import { useCallback, useContext, useRef, useEffect } from 'react'

// Commun componentes
import { TextInput } from 'components/common/TextInput'

// Context
import { SearchContext } from 'context/SearchProvider'

// Custom hooks
import { useDebounce } from 'hooks/useDebounce'
import { useIsFavorites } from 'hooks/useIsFavorites'

// Routing
import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
  const { setSearchQuery } = useContext(SearchContext)
  const isFavorite = useIsFavorites()
  const navigate = useNavigate()
  const inputRef = useRef()

  const clear = useCallback(() => {
    setSearchQuery('')
    inputRef.current.value = ''
  }, [setSearchQuery])

  const handleOnChange = useCallback((evt) => {
    let query = evt.target.value || ''
    setSearchQuery(query)
    
    if (isFavorite) navigate('/')
  }, [isFavorite, navigate, setSearchQuery])

  useEffect(() => (isFavorite) && clear(), [clear, isFavorite])

  const debouncedOnchange = useDebounce(handleOnChange)

  return (
    <TextInput
      placeholder="What can we help you find today?"
      icon="search"
      type="search"
      onChange={debouncedOnchange}
      onClear={clear}
      ref={inputRef}
    />
  )
}