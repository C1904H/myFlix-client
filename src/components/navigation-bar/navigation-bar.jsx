import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../img/film_icon.svg';

//exports navigation bar and search box to page views
export const NavigationBar = ({
  user,
  onLoggedOut,
  moviesSearch,
  setMoviesSearch
}) => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="md"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          myFlix App
          <img
            src={Logo}
            width="70"
            height="60"
            className="d-inline-block align top"
            alt="myFlix logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/signup"
                >
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav>
                  <Nav.Link
                    as={Link}
                    to="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`/users/${user.Username}`}
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    id="search-bar"
                    className="me-3"
                    type="search"
                    value={moviesSearch}
                    placement="start"
                    placeholder="Search for a movie"
                    aria-label="Search"
                    onChange={(e) => setMoviesSearch(e.target.value)}
                  />
                </Form>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
