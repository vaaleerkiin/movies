import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Details } from 'components/Details/Details';
import data from 'API/feth';
const fetchData = new data();

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      const res = await fetchData.getDetails(movieId);
      setMovies(res);
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

  return (
    <>
      <Details
        overview={overview}
        original_title={original_title}
        release_date={release_date}
        poster_path={poster_path}
        vote_average={vote_average}
        genres={genres}
      ></Details>{' '}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
