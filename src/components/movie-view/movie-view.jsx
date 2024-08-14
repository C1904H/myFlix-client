import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img className="w-100" src={movie.Image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director}</span>
      </div>
      <button 
        onClick={onBackClick}
          className="back-button"
          style={{ cursor: "pointer" }}
        >
          Back
        </button>
    </div>
  );
};
