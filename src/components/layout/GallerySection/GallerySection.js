// Grid components
import { Row, Column } from 'components/grid'

// Local components
import { GallerySection as Section } from "./style"

export const GallerySection = () => {
  return (
    <Section.Container className="flex horizontal-center">
      <Row>
        {[...Array(50)].map(_ => {
          return (
            <Column xs="12" sm="12" md="6" lg="4" xl="3">
              <img alt="test" src='https://source.unsplash.com/random/1000x1000' style={{ width: '100%', height: 'auto', padding: '15px' }} />
            </Column>
          )
        })}
      </Row>
    </Section.Container>
  )
}