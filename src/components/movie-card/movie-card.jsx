import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie, isFavorite }) => {
  const storedToken = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  const [addId, setAddId] = useState('');
  const [delId, setDelId] = useState('');

  // Add to favorites
  useEffect(() => {
    const addToFavorites = () => {
      fetch(
        `https://movies-flix-100-e95c2855a01d.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
        {
          method: 'POST',
          // body: JSON.stringify(favoriteMoviesData),
          headers: {
            Authorization: `Bearer ${storedToken}`,
            'Content-Type': 'application/json'
          }
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error - unable to add to favorites');
          }
          alert('Movie added to favorites!');
          window.location.reload();
          return response.json();
        })
        .then((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    // Remove from favorites
    const removeFromFavorites = () => {
      fetch(
        `https://movies-flix-100-e95c2855a01d.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${storedToken}`,
            'Content-Type': 'application/json'
          }
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error - unable to remove from favorites');
          }
          alert('Movie removed from favorites!');
          window.location.reload();
          return response.json();
        })
        .then((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (addId) {
      addToFavorites();
    }
    if (delId) {
      removeFromFavorites();
    }
  }, [addId, delId, token]);

  const handleAddToFavorites = () => {
    setAddId(movie.id);
  };

  const handleRemoveFromFavorites = () => {
    setDelId(movie.id);
  };

  return (
    // <>
    <Card className="shadow p-3 mb-5 bg-rounded">
      <Card.Img
        className="w-100, h-50"
        variant="top"
        src={movie.Image}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Director} <br />
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button
              className="movieLink"
              variant="link"
            >
              Open
            </Button>
          </Link>
        </Card.Text>
        {/* Add/Remove favorite buttons */}
        {isFavorite ? (
          <Button
            className="unfavButton"
            variant="secondary"
            onClick={handleRemoveFromFavorites}
          >
            Remove from favorites
          </Button>
        ) : (
          <Button
            className="favButton"
            onClick={handleAddToFavorites}
          >
            ♡ Add to favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

// Define all prop constraints for the MovieCard
MovieCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};
