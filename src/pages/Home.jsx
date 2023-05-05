import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import data from 'API/feth';
const fetchData = new data();

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getPopularMovies = async () => {
    const res = await fetchData.getPopular();
    setMovies(res);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <MoviesList>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <MoviesCard
          key={id}
          title={title}
          id={id}
          poster_path={`https://image.tmdb.org/t/p/w300/${poster_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`}
          release_date={release_date}
        />
      ))}
    </MoviesList>
  );
};

export default Home;
