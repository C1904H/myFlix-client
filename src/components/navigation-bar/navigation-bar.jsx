import React from 'react';
import Proptypes from 'prop-types';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from "../../../img/film_icon.svg";

export const NavigationBar = ({ user, onLoggedOut, moviesSearch, setMoviesSearch }) => {
  return (
    <Navbar 
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          MyFlix App
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
          <Nav className="me-auto">
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
              </>
            )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                id="search-bar"
                className="me-2"
                type="text"
                value={moviesSearch}
                placeholder="Search for a movie"
                aria-label="Search"
                onChange={(e) => setMoviesSearch(e.target.value)}
              />
            </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
