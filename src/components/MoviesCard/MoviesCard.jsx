import PropTypes from 'prop-types';
import { Card, Title, StyledLink, Release } from './MoviesCard.styled';
import { useLocation } from 'react-router-dom';
export const MoviesCard = ({ title, poster_path, release_date, id }) => {
  const location = useLocation();
  return (
    <Card>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <img src={poster_path} alt={title} /> <Title>{title}</Title>
        <Release>{release_date}</Release>
      </StyledLink>
    </Card>
  );
};

MoviesCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
