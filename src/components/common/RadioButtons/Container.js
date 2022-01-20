// External libraries
import PropTypes from 'prop-types'

export const Container = ({
  children,
  groupId
}) => {
  return (
    <div
      className='flex horizontal-center'
      aria-labelledby={groupId}
      role="radiogroup"
    >
      { children }
    </div>
  )
}

Container.propTypes = {
  groupId: PropTypes.string.isRequired,
  children: PropTypes.node,
}