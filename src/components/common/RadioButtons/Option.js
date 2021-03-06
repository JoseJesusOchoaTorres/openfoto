// External libraries
import PropTypes from 'prop-types'

// Local components
import { RadioOption } from './style'

/**
 * TODO: (Accessibility) It's necessary to
 * handlekeyboard events.
 */
export const Option = ({
  selectedOption,
  onChange,
  value,
  index,
  text
}) => {
  /**
   * Return true or false depending if the
   * current element is selected or not.
   * 
   * @returns {boolean}
   */
  const isSelected = () => value === selectedOption

  return (
    <RadioOption
      tabIndex={index === 0 ? '0' : '-1'}
      onClick={() => onChange(value)}
      aria-checked={isSelected()}
      role="radio"
      className={
        `${isSelected() ?
          "selected" :
          "unselected"
        }`
      }
    >
      {text}
    </RadioOption>
  )
}

Option.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.node.isRequired
}