const API_KEY = '2509671e8c6bd78d29677bfb02b414f6';
const API_URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function getMoviesByPage(page) {
  return fetch(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
}

export function getMovieById(id) {
  return fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    (res) => res.json()
  );
}

export function getGenres() {
  return fetch(
    `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}

export function getImgUrl(path) {
  return `${IMG_URL}${path}`;
}

export function getMoviesByQuery(query) {
  return fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`).then(
    (res) => res.json()
  );
}
