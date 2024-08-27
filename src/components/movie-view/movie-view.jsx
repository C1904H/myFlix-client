import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Button, Row, Col } from 'react-bootstrap';
import './movie-view.scss';


export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movieId);

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
      <div>
        <span>Director: </span>
        <span>{movie.Director}</span>
      </div>
      <br />
      <div>
        <span>Genre: </span>
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