import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card.jsx';

export const FavoriteMovies = ({ user, favoriteMovies }) => {
  return (
    <Col>
      <h2 className="title">My favorite movies</h2>
      <Row>
        {/* message if no movies marked as favorites */}
        {favoriteMovies.length === 0 ? (
          <p>Your list is empty - select some favorite movies!</p>
        ) : (
          // display movie cards for selected favorties
          favoriteMovies.map((movie) => (
            <Col
              key={movie.id}
              sm={6}
              md={6}
              lg={4}
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
