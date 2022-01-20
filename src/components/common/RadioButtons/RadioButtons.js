// External libraries
import PropTypes from 'prop-types'

// Local components
import { Container } from './Container'
import { Option } from './Option'

export const RadioButtons = ({
  selectedOption,
  onChange,
  options = [],
}) => {
  return (
    <>
      {options.map(({ text, value }, index) => {
        return (
          <Option
            key={value}
            text={text}
            index={index}
            value={value}
            onChange={onChange}
            selectedOption={selectedOption}
          />
        )
      })}
    </>
  )
}

RadioButtons.Container = Container
RadioButtons.Option = Option

RadioButtons.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  )
}