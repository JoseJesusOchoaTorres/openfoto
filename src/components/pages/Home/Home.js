// External libraries
import { useEffect } from 'react'

// General components
import { Row, Column } from 'components/grid'

// Layout components
import { Leadspace } from 'components/layout/Leadspace'
import { FilterSection } from 'components/layout/FilterSection'
import { GallerySection } from 'components/layout/GallerySection'
import { Main } from 'components/layout/Main'

// API utils
import { fetch } from 'utils/api/fetch'

// Custom hooks
import { useAsync } from 'hooks/useAsync'

// Endpoints
import { getRandomPhotos } from 'utils/api/endpoints'

export const Home = () => {
  const { data, run, error, isLoading, isError, isSuccess } = useAsync()

  useEffect(() => {
    run(
      fetch(getRandomPhotos())
    )
  }, [run])

  /**
   * TODO: Create error and spinner component
   */
  return (
    <>
      <Row fullWidth>
        <Column>
          <Leadspace />
        </Column>
      </Row>

      <Main>
        {isLoading && <p>Loading ...</p>}
        {isError && <p>Oops something went wrong. Please try again.</p>}
        {isSuccess && (
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
        )}
      </Main>
    </>
  )
}