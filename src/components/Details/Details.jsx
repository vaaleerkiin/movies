import { useRef } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Wrap, Ul, StyledLink, Item, Img } from './Details.styled';

export const Details = ({
  overview,
  original_title,
  release_date,
  poster_path,
  vote_average,
  genres,
}) => {
  const location = useRef(useLocation());
  const backLinkHref = location.current.state?.from ?? '/';

  return (
    <Wrap>
      <Link to={backLinkHref}>Back</Link>
      <Img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
            : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
        }
        alt={original_title}
      />
      <div>
        <h1>{`${original_title} (${String(release_date).slice(0, 4)})`}</h1>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>

        {genres?.[0] && (
          <>
            <h2>Genres</h2>
            <p>
              {genres.map(({ name }) => (
                <span key={name}>{name} </span>
              ))}
            </p>
          </>
        )}

        <h3>Additional information</h3>
        <Ul>
          <Item>
            <StyledLink to="cast">cast</StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews">reviews</StyledLink>
          </Item>
        </Ul>
      </div>
    </Wrap>
  );
};
Details.propTypes = {
  overview: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.array,
};
