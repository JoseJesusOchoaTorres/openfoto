// Libraries
import { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";

// Styles
import { GlobalStyles } from 'theme/GlobalStyles'

// Hooks
import { useTheme } from 'hooks/useTheme'

// Pages
import { Home } from 'components/pages/Home'
import { Header } from 'components/layout/Header'
import { Footer } from 'components/layout/Footer'

function App() {
  const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [theme])

  return (
    <>
      {
        themeLoaded &&
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Header />
            <Home />
            <Footer />
          </ThemeProvider>
      }
    </>
  );
}

export default App
