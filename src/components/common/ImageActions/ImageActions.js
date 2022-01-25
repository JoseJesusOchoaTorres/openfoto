// External libraries
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

export const ImageActions = ({ id, user, links, image }) => {
  /**
   * Icons
   */
  const { download, heart } = IconsInterface

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
          <Button title="Add to favorites" icon={heart} data-image-id={id} />
        </ActionsContainer>
      </AuthorContainer>
    </Container>
  )
}

ImageActions.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired
}