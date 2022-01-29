// Testing
import { render } from '@testing-library/react'

// Themes
import * as themes from 'theme/schema.json'

// Utils
import { localStorageSetter } from 'utils/storage/localStorage'

// External libraries
import { ThemeProvider } from 'styled-components'

export const renderComponent = (component, theme) => {
  localStorageSetter('themes', themes.default);
  const selectedTheme = theme || themes.data.light

  return render(
    <ThemeProvider theme={selectedTheme}>
      {component}
    </ThemeProvider>
  )
}