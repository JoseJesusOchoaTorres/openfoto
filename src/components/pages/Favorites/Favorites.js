// External libraries
import { useEffect, useContext, useState } from 'react'

// General components
import { Spinner } from 'components/common/Spinner'
import { Row, Column } from 'components/grid'

// Layout components
import { FilterSection } from 'components/layout/FilterSection'
import { GallerySection } from 'components/layout/GallerySection'
import { Leadspace } from 'components/layout/Leadspace'
import { Main } from 'components/layout/Main'

// Constants
import { IconsInterface } from 'utils/constants'

// General utils
import { dynamicSort } from 'utils/general/sort'

// Context
import { FilterContext } from 'context/FilterProvider'
import { SearchContext } from 'context/SearchProvider'

export const Favorites = () => {
  const { setSearchQuery } = useContext(SearchContext)
  const [filter] = useContext(FilterContext)
  const [photos, setPhotos] = useState([])

  /**
   * Fetching data by search key
   */
  useEffect(() => setSearchQuery('favorites'), [setSearchQuery])

  /**
   * Updating local state
   */
  // useEffect(() => setPhotos(data?.results), [data])
  // useEffect(() => setPhotos([]), [])

  /**
   * Applying filter
   */
  useEffect(() => setPhotos(photos?.sort(dynamicSort(filter))), [filter, photos, setPhotos])


  return (
    <>
      <Row fullWidth>
        <Column>
          <Leadspace />
        </Column>
      </Row>

      <Main>
        <Spinner.Container>
          <Spinner
            className="h1 large"
            aria-hidden="true"
            icon={IconsInterface['spinnerSolid']}
          />
        </Spinner.Container>

        <Row>
          <Column>
            <FilterSection />
          </Column>
        </Row>

        <Row>
          <Column>
            <GallerySection photos={photos} />
          </Column>
        </Row>
      </Main>
    </>
  )
}