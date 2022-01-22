// External libraries
import { ThemeProvider } from "styled-components";

// Styles
import { GlobalStyles } from 'theme/GlobalStyles'

// Custom hooks
import { useTheme } from 'hooks/useTheme'

// Pages
import { Home } from 'components/pages/Home'
import { Header } from 'components/layout/Header'
import { Footer } from 'components/layout/Footer'

function App() {
  const { theme, themeLoaded, toggleMode } = useTheme()

  return (
    <>
      {
        themeLoaded &&
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header
              toggleMode={toggleMode}
              theme={theme}
            />
            <Home />
            <Footer />
          </ThemeProvider>
      }
    </>
  );
}

export default App
