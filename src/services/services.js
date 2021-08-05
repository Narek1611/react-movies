import axios from 'axios';

const API_KEY = '2509671e8c6bd78d29677bfb02b414f6';
const API_URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function getAllMovies() {
  return axios
    .get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data);
}

export function getMoviesByPage(page) {
  return axios
    .get(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((res) => res.data);
}

export function getMovieById(id) {
  return axios
    .get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data);
}

export function getGenres() {
  return axios
    .get(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data);
}

export function getImgUrl(path) {
  return `${IMG_URL}${path}`;
}

export function getMoviesByQuery(query) {
  return axios
    .get(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`)
    .then((res) => res.data);
}
