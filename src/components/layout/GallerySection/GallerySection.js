// External libraries
import PropTypes from 'prop-types'

// Grid components
import { Row, Column } from 'components/grid'

// Common components
import { ImageActions } from 'components/common/ImageActions'
import { Image } from 'components/common/Image'

// Local components
import { GallerySection as Section } from "./style"

// Custom hooks
import { useFavorites } from 'hooks/useFavorites'

export const GallerySection = ({ photos }) => {
  const { isInFavorites, toggleFavorites } = useFavorites()

  return (
    <Section.Container className="flex horizontal-center">
      <Row>
        {!!photos && photos.map(({ id, alt_description = 'Unsplash Photo', user, links, urls }) => (
          <Column key={id} padding="1" grow xs="12" sm="12" md="6" lg="4" xl="3">
            <ImageActions
              isInFavorites={isInFavorites(id)}
              toggleFavorites={toggleFavorites}
              links={links}
              user={user}
              urls={urls}
              id={id}
              image={
                <Image
                  alt={alt_description}
                  objectFit="cover"
                  loading="lazy"
                  srcSet={`
                    ${urls.thumb} 150w,
                    ${urls.small} 300w,
                    ${urls.regular} 600w,
                  `}
                  src={urls.regular}
                />
              }
            />
          </Column>
        ))}
      </Row>
    </Section.Container>
  )
}

GallerySection.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alt_description: PropTypes.string,
      user: PropTypes.object.isRequired,
      links: PropTypes.object.isRequired,
      urls: PropTypes.shape({
        full: PropTypes.string.isRequired
      })
    })
  )
}