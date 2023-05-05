import axios from 'axios';

class FetchData {
  constructor() {
    this.KEY = 'b3b4716df5187d0bc9138efc2668bc10';
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.popularMovies = '/trending/movie/week';
    this.searchMovies = '/search/movie';
    this.detailsMovies = '/movie/';
    this.creditsMovies = '/movies/get-movie-credits';
    this.reviewsMovies = '/movies/get-movie-reviews';
  }

  async getPopular() {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get(
      `${this.BASE_URL}${this.popularMovies}`,
      options
    );
    return response.data.results;
  }

  async getDetails(movie_id) {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}`,
      options
    );

    return response.data;
  }

  async getCast(movie_id) {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}/credits`,
      options
    );
    return response.data;
  }
  async getReviews(movie_id) {
    const options = { params: { api_key: this.KEY } };
    const response = await axios.get(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}/reviews`,
      options
    );

    return response.data;
  }

  async getSearch(query) {
    const options = { params: { api_key: this.KEY, query } };
    const response = await axios.get(
      `${this.BASE_URL}${this.searchMovies}`,
      options
    );
    return response.data;
  }
}

export default FetchData;
