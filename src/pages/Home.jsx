import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import { toast } from 'react-toastify';
import data from 'API/feth';
import { Loading } from 'components/Loading/Loading';
const fetchData = new data();

const Home = () => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      setStatus('pending');
      try {
        const res = await fetchData.getPopular();
        setMovies(res);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };

    getPopularMovies();
  }, []);

  if (status === 'pending') {
    return <Loading />;
  }
  if (status === 'resolved') {
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
  }

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
};

export default Home;
