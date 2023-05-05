import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrap } from './Reviews.styled';
import data from 'API/feth';
const fetchData = new data();
const Reviews = () => {
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetchData.getReviews(movieId);
      setMovies(res);
    };
    getMovies();
  }, [movieId]);

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
};

export default Reviews;
