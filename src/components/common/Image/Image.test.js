// Testing
import { screen, fireEvent } from '@testing-library/react'

// Common components
import { Image } from 'components/common/Image'

// Utils
import { renderComponent } from 'utils/test/componentWrapper'

describe('Image component', () => {
  test('should be rendered', () => {
    renderComponent(<Image />)
    const img = screen.getByRole('img')
    
    expect(img).toBeInTheDocument()
  })

  test('should be rendered with a deafult src value if it was not provided', () => {
    renderComponent(<Image />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', 'https://source.unsplash.com/random/1000x1000')
  })

  test('should be rendered with the provided src value', () => {
    renderComponent(<Image src="https://source.unsplash.com/random/" />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', 'https://source.unsplash.com/random/')
  })

  test('should be rendered with the default src url if the provided value is ot valid', () => {
    renderComponent(<Image />)
    const img = screen.getByRole('img')

    fireEvent.error(img)

    expect(img).toHaveAttribute('src', 'https://source.unsplash.com/random/1000x1000')
  })

  test('should be rendered in a lazy way by default', () => {
    renderComponent(<Image />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('loading', 'lazy')
  })

  test('should be rendered with a custom loading value', () => {
    renderComponent(<Image loading="eager" />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('loading', 'eager')
  })

  test('should be rendered with an empty string as alternative text if it is not provided', () => {
    renderComponent(<Image />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('alt', '')
  })

  test('should be rendered with the provided alternative text', () => {
    renderComponent(<Image alt="test" />)
    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('alt', 'test')
  })
})
