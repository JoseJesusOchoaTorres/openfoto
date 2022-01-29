// Testing
import { screen } from '@testing-library/react'

// Common components
import { ErrorMessage } from 'components/common/ErrorMessage'

// Utils
import { renderComponent } from 'utils/test/componentWrapper'

describe('ErrorMessage component', () => {
  test('should be rendered', () => {
    renderComponent(<ErrorMessage />)
    const message = screen.getByText(/Oops something went wrong. Please try again./i)

    expect(message).toBeInTheDocument()
  })
  
  test('should render with a custom message if it is provided', () => {
    renderComponent(<ErrorMessage  message="Custom error message"/>)
    const message = screen.getByText(/Custom error message/i)
    
    expect(message).toBeInTheDocument()
  })
})
