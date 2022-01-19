import { useEffect, useState } from 'react'
import { localStorageSetter, localStorageGetter } from 'utils/storage/localStorage'

export const useTheme = () => {
  const themes = localStorageGetter('themes')

  const [theme, setTheme] = useState(themes.data.light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = mode => {
    localStorageSetter('theme', mode)
    setTheme(mode)
  }

  useEffect(() => {
    const localTheme = localStorageGetter('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light)
    
    setThemeLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { themes, theme, themeLoaded, setMode }
}