import React from 'react';
import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { ProfileView } from '../profile-view/profile-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavigationBar } from '../navigation-bar/navigation-bar';

export const MainView = () => {
  // retrieve user and token from local storage
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  // set initial state of user and token on retrieved values
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState('');

  useEffect(() => {
    if (!token) {
      return;
    }
    // fetch movies list
    fetch('https://movies-flix-100-e95c2855a01d.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            Image: movie.ImagePath,
            Title: movie.Title,
            Description: movie.Description,
            Genre: movie.Genre.Name,
            Director: movie.Director.Name
          };
        });
        localStorage.setItem('movies', JSON.stringify(moviesFromApi));
        setMovies(moviesFromApi);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [token]);
  // movies search box
  const onMoviesSearch = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(moviesSearch.toLowerCase())
  );

  // displays and sets routes for app's different views
  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <br />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/users/:Username"
            element={
              <>
                {!user ? (
                  <Navigate
                    to="/login"
                    replace
                  />
                ) : (
                  <ProfileView
                    user={user}
                    movies={movies}
                    token={token}
                    onSubmit={(user) => setUser(user)}
                  />
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate
                    to="/login"
                    replace
                  />
                ) : movies.length === 0 ? (
                  <Col>The list is empty</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate
                    to="/login"
                    replace
                  />
                ) : onMoviesSearch.length === 0 ? (
                  <Col>The list is empty</Col>
                ) : (
                  <>
                    {onMoviesSearch.map((movie) => (
                      <Col
                        className="mb-4"
                        key={movie.id}
                        sm={12}
                        md={12}
                        lg={4}
                      >
                        <MovieCard
                          isFavorite={user.FavoriteMovies.includes(movie.id)}
                          movie={movie}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
