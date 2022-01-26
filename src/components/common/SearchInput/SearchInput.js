// External libraries
import { useCallback, useContext, useRef } from 'react'

// Commun componentes
import { TextInput } from 'components/common/TextInput'

// Context
import { PhotosContext } from 'context/PhotosProvider'

// Custom hooks
import { useDebounce } from 'hooks/useDebounce'

export const SearchInput = () => {
  const { setSearchQuery } = useContext(PhotosContext)
  const inputRef = useRef()

  const handleOnChange = useCallback((evt) => {
    let query = evt.target.value
    setSearchQuery(query)
  }, [setSearchQuery])

  const debouncedOnchange = useDebounce(handleOnChange)

  const clear = () => {
    setSearchQuery('')
    inputRef.current.value = ''
  }

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