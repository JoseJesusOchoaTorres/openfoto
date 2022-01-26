// Endpoints
const getRandomPhotos = (page = 1, photosByPage = 20) => `photos?page=${page}&per_page=${photosByPage}`
const getPhotosByQuery = (query = 'random', page = 1, photosByPage = 20) => `search/photos?query=${query}?page=${page}&per_page=${photosByPage}`

export {
    getRandomPhotos,
    getPhotosByQuery
}