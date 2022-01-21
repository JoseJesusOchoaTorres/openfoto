// External libraries
import PropTypes from 'prop-types'

// Local components
import {
  Container,
  AuthorContainer,
  AuthorImageProfile,
  AuthorName
} from './style'

export const ImageActions = ({ image }) => {
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
      </AuthorContainer>
    </Container>
  )
}

ImageActions.propTypes = {
  image: PropTypes.node.isRequired
}