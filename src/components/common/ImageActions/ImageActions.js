// External libraries
import { useState } from 'react'
import PropTypes from 'prop-types'

// Common components
import { Button } from 'components/common/Button'

// Local components
import {
  Container,
  AuthorContainer,
  AuthorImageProfile,
  AuthorName,
  ActionsContainer
} from './style'

// Constants
import { IconsInterface } from 'utils/constants'

// Custom hooks
import { useDebounce } from 'hooks/useDebounce'

export const ImageActions = ({ id, user, links, urls, image, toggleFavorites, isInFavorites = false }) => {
  const { download, heart, heartFilled } = IconsInterface
  const [favorited, setFavorited] = useState(isInFavorites)

  const handleToggle = () => {
    toggleFavorites({ id, user, links, urls })
    setFavorited(!favorited)
  }
  
  const debouncedToggle = useDebounce(handleToggle, 300)

  return (
    <Container>
      {image}
      <AuthorContainer>
        <AuthorImageProfile
          src={user.profile_image.large}
          title={user.name}
          alt={user.name}
        />
        <AuthorName>
          {user.name}
        </AuthorName>

        <ActionsContainer>
          <a
            title='Download image'
            href={links.download}
            target="_blank"
            rel="noreferrer"
          >
            <Button title="Download" icon={download} />
          </a>

          <Button
            title="Add to favorites"
            icon={favorited ? heartFilled : heart}
            onClick={debouncedToggle}
          />
        </ActionsContainer>
      </AuthorContainer>
    </Container>
  )
}

ImageActions.propTypes = {
  toggleFavorites: PropTypes.func.isRequired,
  links: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  urls: PropTypes.object.isRequired,
  image: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isInFavorites: PropTypes.bool
}