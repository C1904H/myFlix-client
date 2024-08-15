import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // const [user, setUser] = useState(storedUser? storedUser: null);
  // const [token, setToken] = useState(storedToken ? storedToken : null);

  return (
    <Card>
    <Card.Img variant="top" src={movie.Image} />
      <Card.Body>
       <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
      <Card.Footer> {movie.Genre}</Card.Footer>
    </Card>
  );
};

// Define all prop constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired
  }).isRequired
};
