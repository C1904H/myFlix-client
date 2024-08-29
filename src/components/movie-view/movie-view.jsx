import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import './movie-view.scss';

// ecport movieView to main view
export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movieId);

  // display movie details
  return (
    <div>
      <div>
        <img
          className="movieImage"
          src={movie.Image}
        />
      </div>
      <div>
        <h3>{movie.Title}</h3>
      </div>
      <div>
        <span>{movie.Description}</span>
      </div>
      <br />
      <div> 
        <span className="director">Director: </span>
        <span>{movie.Director}</span>
      </div>
      <br />
      <div className="genre" >
        <span className="genre">Genre: </span>
        <span>{movie.Genre}</span>
      </div>
     
      
      <Link to={'/'}>
      <Button variant="info" 
        >
          Home
        </Button>
        </Link>
    </div>
  );
};

// MovieView.propTypes = {
//   movies: PropTypes.shape({
//    Title: PropTypes.string,
//    Description: PropTypes.string,
//    Genre: PropTypes.string,
//    Director: PropTypes.string, 
//  }).isRequired
//  };