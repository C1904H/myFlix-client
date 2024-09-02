import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import './movie-view.scss';

// Export movieView to main view
export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movieId);

  // Display movie details
  return (
    <>
      <div className="d-flex justify-content-center">
        <div>
          <img 
            className="movieImage"
            src={movie.Image} alt="movie poster"
          />
        </div>
        <div className="w-50">
          <h3>{movie.Title}</h3>

          <span className="director">Director: </span>
          <span>{movie.Director}</span>
          <br />
          <span className="genre">Genre: </span>
          <span>{movie.Genre}</span>

          <br />
          <br />
          <span>{movie.Description}</span>

          <br />
        </div>
      </div>
      <div>
        <Link to={'/'}>
          <Button variant="info">Home</Button>
        </Link>
      </div>
    </>
  );
};


