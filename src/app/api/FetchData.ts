import axios, { Axios, AxiosResponse } from "axios";

class FetchData {
  public KEY = "b3b4716df5187d0bc9138efc2668bc10";
  public BASE_URL = "https://api.themoviedb.org/3";
  public popularMovies = "/trending/movie/week";
  public searchMovies = "/search/movie";
  public detailsMovies = "/movie/";
  public creditsMovies = "/movies/get-movie-credits";
  public reviewsMovies = "/movies/get-movie-reviews";

  public async getPopular() {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get<string, AxiosResponse<{}>>(
      `${this.BASE_URL}${this.popularMovies}`,
      options
    );
    return response.data;
  }

  public async getDetails(movie_id: string) {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}`,
      options
    );

    return response.data;
  }

  public async getCast(movie_id: string) {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}/credits`,
      options
    );
    return response.data;
  }

  public async getReviews(movie_id: string) {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get<string, AxiosResponse<[data: []]>>(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}/reviews`,
      options
    );

    return response.data;
  }

  public async getSearch(query: string) {
    const options = { params: { api_key: this.KEY, query } };
    const response = await axios.get(
      `${this.BASE_URL}${this.searchMovies}`,
      options
    );
    return response.data;
  }
}

export default FetchData;
