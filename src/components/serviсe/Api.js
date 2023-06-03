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
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching search movies:', error);
    throw error;
  }
}

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`
    );
    const { poster_path, vote_average } = response.data;
    return {
      ...response.data,
      poster_path,
      vote_average,
    };
  } catch (error) {
    throw new Error("Error fetching movie details");
  }
};


export const fetchCast = async (id) => {
  try {
    const response = await axios.get(
      `${BaseUrl}/movie/${id}/credits?api_key=${ApiKey}`
    );
    const { cast } = response.data;
    const updatedCast = cast.map((actor) => ({
      ...actor,
      profilePath: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        : null,
    }));
    return {
      cast: updatedCast,
    };
  } catch (error) {
    throw new Error("Error fetching movie details");
  }
};
export const fetchReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BaseUrl}/movie/${movieId}/reviews`, {
      params: {
        api_key: ApiKey,
      },
    });

    const reviews = response.data.results;
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};






