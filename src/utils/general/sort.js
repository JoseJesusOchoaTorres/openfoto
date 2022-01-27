const dynamicSort = (property) => (a, b) => (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0

export { dynamicSort }