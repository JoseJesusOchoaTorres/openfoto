// Endpoints
const getRandomPhotos = (page = 1, photosByPage = 20) => `photos?page=${page}&per_page=${photosByPage}`
const getPhotosByQuery = (query = '', page = 1, photosByPage = 20) => `photos?query=${query}?page=${page}&per_page=${photosByPage}`

export {
    getRandomPhotos,
    getPhotosByQuery
}