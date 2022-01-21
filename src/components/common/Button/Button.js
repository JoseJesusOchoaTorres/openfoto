// External libraries
import PropTypes from 'prop-types'

// Local components
import { ButtonBase, ButtonIcon } from './style'

export const Button = ({ children, icon, title = "" }) => {
  return (
    <ButtonBase title={title}>
      {!!icon && (
        <ButtonIcon
          aria-hidden="true"
          icon={icon}
        />
      )}
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
}