// External libraries
import { useEffect, useContext } from 'react'

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
import { getRandomPhotos } from 'utils/api/endpoints'

// Context
import { FilterContext } from 'context/FilterProvider'

export const Home = () => {
  const { data, setData, run, isLoading, isSuccess, isError } = useAsync()
  const [filter] = useContext(FilterContext)

  /**
   * Fetching default data
   */
  useEffect(() => run(fetch(getRandomPhotos())), [run])

  /**
   * Applying filter
   */
  useEffect(() => setData(data?.sort(dynamicSort(filter))), [filter, data, setData])

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
              icon={IconsInterface['spinner-solid']}
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
                  <GallerySection photos={data} />
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