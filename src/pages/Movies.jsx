import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'components/Search/Search';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import data from 'API/feth';
const fetchData = new data();
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const getMoviesSearch = async () => {
      const res = await fetchData.getSearch(query);
      setMovies(res);
    };
    getMoviesSearch();
  }, [query]);

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      <MoviesList>
        {movies.results?.[0] &&
          movies.results.map(({ id, title, poster_path, release_date }) => (
            <MoviesCard
              key={id}
              title={title}
              id={id}
              poster_path={`https://image.tmdb.org/t/p/w300/${poster_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`}
              release_date={release_date}
            />
          ))}
      </MoviesList>
    </>
  );
};

export default Movies;
