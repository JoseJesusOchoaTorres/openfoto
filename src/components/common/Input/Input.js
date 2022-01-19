import PropTypes from 'prop-types'
import { IconsInterface } from 'utils/constants'

import {
  InputContainer,
  Input,
  InputIcon,
  ClearIcon
} from './style'

export const TextInput = ({
  type = 'text',
  placeholder= '',
  icon = 'search'
}) => {
  return (
    <InputContainer>
      <InputIcon icon={icon} />
      <Input type={type} placeholder={placeholder} />
      <ClearIcon icon={IconsInterface.cleanSearch} />
    </InputContainer>
  )
}

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string
}