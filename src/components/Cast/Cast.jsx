import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrap, Item } from './Cast.styled';
import data from 'API/feth';
const fetchData = new data();
const Cast = () => {
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetchData.getCast(movieId);
      setMovies(res);
    };
    getMovies();
  }, [movieId]);

  return (
    <div>
      <Wrap>
        {movies.cast &&
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
          ))}
      </Wrap>
    </div>
  );
};

export default Cast;
