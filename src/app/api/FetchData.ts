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
    const response = await fetch(
      `${this.BASE_URL}${this.popularMovies}?api_key=${this.KEY}`,
      { cache: "no-cache" }
    );
    return await response.json();
  }

  public async getDetails(movie_id: string) {
    const response = await fetch(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}?api_key=${this.KEY}`,
      { cache: "no-cache" }
    );

    return await response.json();
  }

  public async getCast(movie_id: string) {
    const options = { params: { api_key: this.KEY } };
    const response = await fetch(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}/credits?api_key=${this.KEY}`,
      { cache: "no-cache" }
    );
    return await response.json();
  }

  public async getReviews(movie_id: string) {
    const response = await fetch(
      `${this.BASE_URL}${this.detailsMovies}${movie_id}/reviews?api_key=${this.KEY}`,
      { cache: "no-cache" }
    );
    return await response.json();
  }

  public async getSearch(query: string) {
    const options = { params: { api_key: this.KEY, query } };
    const response = await fetch(
      `${this.BASE_URL}${this.searchMovies}?api_key=${this.KEY}&query=${query}`,
      { cache: "no-cache" }
    );
    return await response.json();
  }
}

export default FetchData;
