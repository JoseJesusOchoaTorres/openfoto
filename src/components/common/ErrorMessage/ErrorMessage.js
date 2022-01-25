// External libraries
import PropTypes from 'prop-types'

// Local components
import { ErrorMessageContainer } from './style'

export const ErrorMessage = ({
  message = 'Oops something went wrong. Please try again.'
}) => {
  return (
    <ErrorMessageContainer className='h4 lighter text-center'>
      {message}
    </ErrorMessageContainer>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}