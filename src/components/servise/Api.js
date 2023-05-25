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
