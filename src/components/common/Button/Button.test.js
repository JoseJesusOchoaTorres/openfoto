/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

// Testing
import { screen } from '@testing-library/react'

// Common components
import { Button } from 'components/common/Button'

// Utils
import { renderComponent } from 'utils/test/componentWrapper'

describe('Button component', () => {
  test('should be rendered', () => {
    renderComponent(<Button>Test button</Button>)
    const button = screen.getByText(/Test button/i)

    expect(button).toBeInTheDocument()
  })
  
  test('should have empty string as default title if it is not provided', () => {
    renderComponent(<Button>Test button without title attribute</Button>)
    const button = screen.getByTitle('')
    
    expect(button).toBeInTheDocument()
  })

  test('should render icon if it is provided', () => {
    const {container} = renderComponent(<Button icon="download" />)
    const icon = container.querySelector('.lni-download')

    expect(icon).toBeInTheDocument()
  })

  test('should render icon and text', () => {
    const {container} = renderComponent(
      <Button icon="download">
        Test button with text and icon
      </Button>
    )
    const button = screen.getByText(/Test button with text and icon/i)
    const icon = container.querySelector('.lni-download')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
