// External libraries
import PropTypes from 'prop-types'

// Local components
import { ButtonBase, ButtonIcon } from './style'

export const Button = ({ onClick = () => {}, children, icon, title = "" }) => {
  return (
    <ButtonBase title={title} onClick={onClick}>
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
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
}