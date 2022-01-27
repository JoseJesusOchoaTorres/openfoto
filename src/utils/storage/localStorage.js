export const localStorageSetter = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const localStorageGetter = key => {
  const value = window.localStorage.getItem(key)
  if (value) return JSON.parse(value)
}