import axios from "axios";
// import { useSearchParams } from "react-router-dom"

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
    const searchMovies = response.data.results;
    console.log("Отримано фільми, що шукали:", searchMovies);
    return searchMovies;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null; // або інше значення, що вказує на помилку
  }
};
