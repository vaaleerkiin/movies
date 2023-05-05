import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrap } from './Reviews.styled';
import { Loading } from 'components/Loading/Loading';
import data from 'API/feth';
import { toast } from 'react-toastify';
const fetchData = new data();
const Reviews = () => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      setStatus('pending');

      try {
        const res = await fetchData.getReviews(movieId);
        setMovies(res);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    getMovies();
  }, [movieId]);

  if (status === 'pending') {
    return <Loading />;
  }

  if (status === 'resolved') {
    return (
      <Wrap>
        {movies.results?.[0] ? (
          movies.results.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <h3>There's nothing here</h3>
        )}
      </Wrap>
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

export default Reviews;
