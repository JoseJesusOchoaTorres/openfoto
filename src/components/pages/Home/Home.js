// General components
import { Row, Column } from 'components/grid'

// Layout components
import { Leadspace } from 'components/layout/Leadspace'
import { FilterSection } from 'components/layout/FilterSection'
import { GallerySection } from 'components/layout/GallerySection'
import { Main } from 'components/layout/Main'

export const Home = () => {
  return (
    <>
      <Row fullWidth>
        <Column>
          <Leadspace />
        </Column>
      </Row>

      <Main>
        <Row>
          <Column>
            <FilterSection />
          </Column>
        </Row>

        <Row>
          <Column>
            <GallerySection />
          </Column>
        </Row>
      </Main>
    </>
  )
}