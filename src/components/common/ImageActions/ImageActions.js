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

/**
 * TODO: Remove this mock
 */
export const ImageActions = ({ image }) => {
  /**
   * Icons
   */
  const { download, heart } = IconsInterface

  const mockingUserProfile = {
    first_name: 'Javier',
    last_name: 'Esteban',
    profile_image: {
      small: 'https://images.unsplash.com/profile-1621107238073-d8037d5def74image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
      medium: 'https://images.unsplash.com/profile-1621107238073-d8037d5def74image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
    }
  }

  const composeFullName = () => `${mockingUserProfile.first_name} ${mockingUserProfile.last_name}`
  return (
    <Container>
      {image}
      <AuthorContainer>
        <AuthorImageProfile
          src={mockingUserProfile.profile_image.medium}
          alt={composeFullName()}
        />
        <AuthorName>
          {composeFullName()}
        </AuthorName>

        <ActionsContainer>
          <Button title="Download" icon={download} />
          <Button title="Add to favorites" icon={heart} />
        </ActionsContainer>
      </AuthorContainer>
    </Container>
  )
}

ImageActions.propTypes = {
  image: PropTypes.node.isRequired
}