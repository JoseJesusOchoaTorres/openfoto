// External libraries
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

// Constants
import { IconsInterface } from 'utils/constants'

import {
  InputContainer,
  Input,
  InputIcon,
  ClearIcon
} from './style'

export const TextInput = forwardRef(({
  type = 'text',
  placeholder = '',
  onChange,
  onClear,
  value,
  icon
},
  ref
) => (
  <InputContainer>
    {!!IconsInterface[icon] && (
      <InputIcon
        aria-hidden="true"
        icon={IconsInterface[icon]}
      />
    )}
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      ref={ref}
    />
    {!!onClear && (
      <ClearIcon
        as="button"
        className="h6"
        aria-hidden="false"
        aria-label="Clear search"
        title="Clear search"
        icon={IconsInterface.cleanSearch}
        onClick={onClear}
      />
    )}
  </InputContainer>
))

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  // ref: PropTypes.,
  icon: PropTypes.string
}