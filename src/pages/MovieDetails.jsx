import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Details } from 'components/Details/Details';
import { toast } from 'react-toastify';
import data from 'API/feth';
import { Loading } from 'components/Loading/Loading';
const fetchData = new data();

const MovieDetails = () => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      setStatus('pending');
      try {
        const res = await fetchData.getDetails(movieId);
        setMovies(res);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };

    getMoviesDetails();
  }, [movieId]);

  const {
    overview,
    original_title,
    release_date,
    poster_path,
    vote_average,
    genres,
  } = movies;

  if (status === 'pending') {
    return <Loading />;
  }

  if (status === 'resolved') {
    return (
      <>
        <Details
          overview={overview}
          original_title={original_title}
          release_date={release_date}
          poster_path={poster_path}
          vote_average={vote_average}
          genres={genres}
        ></Details>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </>
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

export default MovieDetails;
