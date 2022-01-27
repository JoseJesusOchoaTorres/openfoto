// External libraries
import { ThemeProvider } from 'styled-components'

// Styles
import { GlobalStyles } from 'theme/GlobalStyles'

// Custom hooks
import { useTheme } from 'hooks/useTheme'

// Pages
import { Home } from 'components/pages/Home'
import { Favorites } from 'components/pages/Favorites'

// Layout
import { Header } from 'components/layout/Header'
import { Footer } from 'components/layout/Footer'

// Context
import { FilterProvider } from 'context/FilterProvider'
import { SearchProvider } from 'context/SearchProvider'

// Router
import { Routes, Route, Navigate } from 'react-router-dom'

// Constants
import { Routes as RouteConstants } from 'utils/constants'

function App() {
  const { theme, themeLoaded, toggleMode } = useTheme()

  return (
    <>
      {
        themeLoaded &&
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <SearchProvider>
            <FilterProvider>
              <Header
                toggleMode={toggleMode}
                theme={theme}
              />

              <Routes>
                <Route path={RouteConstants.home} element={<Home />} />
                <Route path={RouteConstants.favorites} element={<Favorites />} />
                <Route path="*" element={<Navigate to={RouteConstants.home} />} />
              </Routes>

              <Footer />
            </FilterProvider>
          </SearchProvider>
        </ThemeProvider>
      }
    </>
  );
}

export default App
