// Import PropTypes library
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>
  );
};

// Define all prop constrains for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
