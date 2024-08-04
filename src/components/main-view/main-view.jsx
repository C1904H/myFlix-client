import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: 'The Dark Knight',
      Description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      Genre: 'Action',
      Director: 'Christopher Nolan',
      Image:
        'https://media-cache.cinematerial.com/p/500x/udapnxr3/the-dark-knight-movie-poster.jpg?v=1456051180'
    },
    {
      id: 2,
      Title: 'Forrest Gump',
      Description:
        'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
      Genre: 'Drama',
      Director: 'Robert Zemeckis',
      Image:
        'https://media-cache.cinematerial.com/p/500x/hncfztv7/forrest-gump-movie-poster.jpg?v=1602182137'
    },
    {
      id: 3,
      Title: 'Pulp Fiction',
      Description:
        'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.',
      Genre: 'Crime',
      Director: 'Quentin Tarantino',
      Image:
        'https://media-cache.cinematerial.com/p/500x/srmnoyxu/pulp-fiction-movie-poster.jpg?v=1668291848'
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
