import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'components/Search/Search';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import { Loading } from 'components/Loading/Loading';
import { toast } from 'react-toastify';
import data from 'API/feth';
const fetchData = new data();
const Movies = () => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
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
      setStatus('pending');
      try {
        const res = await fetchData.getSearch(query);
        setMovies(res);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    getMoviesSearch();
  }, [query]);

  if (status === 'rejected') {
    toast.error(error, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      {status === 'pending' && <Loading />}
      {status === 'resolved' && (
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
      )}
    </>
  );
};

export default Movies;
