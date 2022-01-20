// Grid components
import { Row, Column } from 'components/grid'

// Common components
import { Image } from 'components/common/Image'

// Local components
import { GallerySection as Section } from "./style"

export const GallerySection = () => {
  /**
   * Remove it after we get the data from the API
   */
  let keyCounter = 1
  return (
    <Section.Container className="flex horizontal-center">
      <Row>
        {[...Array(50)].map((index) => {
          return (
            <Column key={`column-${keyCounter++}`} xs="12" sm="12" md="6" lg="4" xl="3">
              <Image
                alt="test"
                loading="lazy"
                srcSet="https://source.unsplash.com/random/150x150 150w,
                      https://source.unsplash.com/random/300x300 300w,
                      https://source.unsplash.com/random/600x600 600w,
                      https://source.unsplash.com/random/1000x1000 1000w,
                      https://source.unsplash.com/random/1500x1500 1500w"
                src='https://source.unsplash.com/random/1000x1000'
              />
            </Column>
          )
        })}
      </Row>
    </Section.Container>
  )
}