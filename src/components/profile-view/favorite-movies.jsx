import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card.jsx';
import './favorite-movies.scss';

export const FavoriteMovies = ({ user, favoriteMovies }) => {
  return (
    <Col>
      <h2 className="title">My favorite movies</h2>
      <Row>
      {favoriteMovies.length === 0 ? (
        <p>Your list is empty - select some favorite movies!</p>
      ) : (
        favoriteMovies.map((movie) => (
          <Col
            key={movie.id}
            sm={12}
            md={4}
          >
            <Link
              className="movielink"
              to={`/movies/${encodeURIComponent(movie.id)}`}
            ></Link>
            <MovieCard
              key={movie.id}
              isFavorite={user.FavoriteMovies.includes(movie.id)}
              movie={movie}
            />
          </Col>
        ))
      )}
      </Row>
    </Col>
  );
};
FavoriteMovies.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};
