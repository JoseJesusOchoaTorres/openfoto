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
  icon = IconsInterface.search
}) => {
  return (
    <InputContainer>
      <InputIcon
        aria-hidden="true"
        icon={icon}
      />
      <Input
        type={type}
        placeholder={placeholder}
      />
      <ClearIcon
        as="button"
        className="h6"
        aria-hidden="false"
        aria-label="Clear search"
        title="Clear search"
        icon={IconsInterface.cleanSearch} />
    </InputContainer>
  )
}

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string
}