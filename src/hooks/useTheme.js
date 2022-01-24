import { useEffect, useState, useCallback } from 'react'
import { localStorageSetter, localStorageGetter } from 'utils/storage/localStorage'

export const useTheme = () => {
  const themes = localStorageGetter('themes')

  const [theme, setTheme] = useState(themes.data.light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = useCallback(
    mode => {
      localStorageSetter('theme', mode)
      setTheme(mode)
    }, [setTheme]
  )

  const toggleMode = useCallback(
    () => {
      theme.name === 'light' ?
        setMode(themes.data.dark) :
        setMode(themes.data.light)
    }, [setMode, theme.name, themes.data.dark, themes.data.light]
  )

  useEffect(() => {
    const localTheme = localStorageGetter('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light)
    
    setThemeLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { themes, theme, themeLoaded, setMode, toggleMode }
}