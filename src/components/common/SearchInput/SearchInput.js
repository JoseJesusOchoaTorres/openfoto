// External libraries
import { useCallback, useContext, useRef } from 'react'

// Commun componentes
import { TextInput } from 'components/common/TextInput'

// Context
import { PhotosContext } from 'context/PhotosProvider'

// Custom hooks
import { useDebounce } from 'hooks/useDebounce'
import { } from 'react/cjs/react.development'

export const SearchInput = () => {
  const { setSearchQuery } = useContext(PhotosContext)
  let textInput = useRef(null);

  const handleOnChange = useCallback((evt) => {
    let query = evt.target.value
    setSearchQuery(query)
  }, [setSearchQuery])

  const debouncedOnchange = useDebounce(handleOnChange)

  const clear = () => {
    setSearchQuery('')
  }

  return (
    <TextInput
      placeholder="What can we help you find today?"
      icon="search"
      type="search"
      onChange={debouncedOnchange}
      onClear={clear}
      rel={textInput}
    />
  )
}