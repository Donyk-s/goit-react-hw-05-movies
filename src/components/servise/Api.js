import axios from "axios";

const ApiKey = 'ce6180729ed4220a4a998763c9b5bf5d';
const BaseUrl = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/trending/movie/day`, {
      params: {
        api_key: ApiKey
      }
    });
    const trendingMovies = response.data.results;
    console.log("Отримано трендові фільми:", trendingMovies);
    return trendingMovies;
  } catch (error) {
    console.error('Помилка при отриманні трендових фільмів:', error);
    return [];
  }
};
export const fetchSearchMovies = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}/search/movie`, {
      params: {
        api_key: ApiKey,
        query: query
      }
    });

    // Обробка відповіді з сервера
    const data = response.data;
    // Повернення результату
    return data;
  } catch (error) {
    // Обробка помилки
    console.error('Error fetching search movies:', error);
    throw error;
  }
}

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching movie details");
  }
};