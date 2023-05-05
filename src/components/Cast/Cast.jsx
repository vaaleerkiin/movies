import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrap, Item } from './Cast.styled';
import { toast } from 'react-toastify';
import { Loading } from 'components/Loading/Loading';
import data from 'API/feth';
const fetchData = new data();
const Cast = () => {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      setStatus('pending');
      try {
        const res = await fetchData.getCast(movieId);
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
      <div>
        <Wrap>
          {movies.cast?.[0] ? (
            movies.cast.map(({ name, id, profile_path, character }) => (
              <Item key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
                      : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
                  }
                  alt={name}
                />
                <div>
                  <h3>{name}</h3>
                  <p>
                    character: <b> {character}</b>
                  </p>
                </div>
              </Item>
            ))
          ) : (
            <h3>There's nothing here</h3>
          )}
        </Wrap>
      </div>
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

export default Cast;
