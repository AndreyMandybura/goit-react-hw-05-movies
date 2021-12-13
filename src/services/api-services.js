const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '09b7f01f85b929bb7e907590c4dde06b';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found!'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchSearchMovies(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${KEY}&languege=en-US&page=1&include_adult=false&query=${query}`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&languedge=en-US`
  );
}

export function fetchMovieCast({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&languedge=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&languedge=en-US&page=1`
  );
}
