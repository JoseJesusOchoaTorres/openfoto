// External libraries
import { useEffect, useContext, useState } from 'react'

// General components
import { ErrorMessage } from 'components/common/ErrorMessage'
import { Spinner } from 'components/common/Spinner'
import { Row, Column } from 'components/grid'

// Layout components
import { FilterSection } from 'components/layout/FilterSection'
import { GallerySection } from 'components/layout/GallerySection'
import { Leadspace } from 'components/layout/Leadspace'
import { Main } from 'components/layout/Main'

// Constants
import { IconsInterface } from 'utils/constants'

// API utils
import { fetch } from 'utils/api/fetch'

// General utils
import { dynamicSort } from 'utils/general/sort'

// Custom hooks
import { useAsync } from 'hooks/useAsync'

// Endpoints
import { getPhotosByQuery } from 'utils/api/endpoints'

// Context
import { FilterContext } from 'context/FilterProvider'
import { SearchContext } from 'context/SearchProvider'

export const Home = () => {
  const { data, run, isLoading, isSuccess, isError } = useAsync()
  const { searchQuery } = useContext(SearchContext)
  const [filter] = useContext(FilterContext)
  const [photos, setPhotos] = useState([])

 
  /**
   * Fetching data by search key
   */
  useEffect(() => run(fetch(getPhotosByQuery(searchQuery))), [run, searchQuery])

  /**
   * Updating local state
   */
  useEffect(() => setPhotos(data?.results), [data])

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
        {isError && <ErrorMessage />}
        {isLoading ? (
          <Spinner.Container>
            <Spinner
              className="h1 large"
              aria-hidden="true"
              icon={IconsInterface['spinnerSolid']}
            />
          </Spinner.Container>
        ) :
          isSuccess ? (
            <>
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
            </>
          ) :
            null
        }
      </Main>
    </>
  )
}