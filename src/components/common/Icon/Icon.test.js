/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

// Common components
import { Icon } from 'components/common/Icon'

// Utils
import { renderComponent } from 'utils/test/componentWrapper'

describe('Icon component', () => {
  test('should be rendered with a default icon', () => {
    const {container} = renderComponent(<Icon />)
    const icon = container.querySelector('.lni-question')

    expect(icon).toBeInTheDocument()
  })
  
  test('should be rendered with a custom icon if it is provided', () => {
    const {container} = renderComponent(<Icon icon="heart" />)
    const icon = container.querySelector('.lni-heart')

    expect(icon).toBeInTheDocument()
  })
})
