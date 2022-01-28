// External libraries
import { useEffect, useContext, useState } from 'react'

// Grid components
import { Row, Column } from 'components/grid'

// Common components
import { ErrorMessage } from 'components/common/ErrorMessage'

// Layout components
import { GallerySection } from 'components/layout/GallerySection'
import { FilterSection } from 'components/layout/FilterSection'
import { Leadspace } from 'components/layout/Leadspace'
import { Main } from 'components/layout/Main'

// Context
import { SearchContext } from 'context/SearchProvider'

// Utils
import { localStorageGetter } from 'utils/storage/localStorage'

export const Favorites = () => {
  const { setSearchQuery } = useContext(SearchContext)
  const [photos, setPhotos] = useState([])

  /**
   * Updating search key
   */
  useEffect(() => setSearchQuery('favorites'), [setSearchQuery])

  /**
   * Update local state with localStorage data
   */
  useEffect(() => setPhotos(localStorageGetter('favorites')), [])

  return (
    <>
      <Row fullWidth>
        <Column>
          <Leadspace />
        </Column>
      </Row>

      <Main>
        {photos?.length > 0 ? (
          <>
            <Row>
              <Column>
                <FilterSection noFilterOptions />
              </Column>
            </Row>

            <Row>
              <Column>
                <GallerySection photos={photos} />
              </Column>
            </Row>
          </>
        ) : (
          <ErrorMessage message='Oops no favorite photos yet.' />
        )}
      </Main>
    </>
  )
}