import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import { FavoriteMovies } from './favorite-movies.jsx';
import { UpdateUser } from './update-user';
import { Card, Button } from 'react-bootstrap';

import './profile-view.scss';

export const ProfileView = ({ token, user, movies, onSubmit }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const [username, setUsername] = useState(user.Username);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [password, setPassword] = useState('');

  const favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m.id)
  );

  const formData = {
    Username: username,
    Email: email,
    Password: password
  };

  formData.Birthday = birthday
    ? new Date(birthday).toISOString().substring(0, 10)
    : null;

  const handleSubmit = (event) => {
    event.preventDefault(event);

    // Send updated user information to the server, endpoint /users/:username
    fetch(
      `https://movies-flix-100-e95c2855a01d.herokuapp.com/users/${storedUser.Username}`,
      {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('Update successful!');
          return response.json();
        }
        alert('Update failed');
      })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        onSubmit(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (e) => {
    switch (e.target.type) {
      case 'text':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'date':
        setBirthday(e.target.value);
      default:
    }
  };

  const handleDeleteAccount = (id) => {
    fetch(
      `https://movies-flix-100-e95c2855a01d.herokuapp.com/users/${storedUser.Username}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      if (response.ok) {
        alert('Account deleted');
        localStorage.clear();
        window.location.reload();
      } else {
        alert('Something went wrong');
        console.log(error);
      }
    });
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2> Welcome {username}! </h2>
              </Card.Title>
              <Card.Text>
                {email}
                <Button
                  onClick={() => handleDeleteAccount(storedUser._id)}
                  className="button-delete mt-3"
                  type="submit"
                  variant="outline-danger"
                >
                  Delete account
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col s={12} m={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2>Update profile information:</h2>
              </Card.Title>
              <Card.Text>
                <UpdateUser
                  formData={formData}
                  handleUpdate={handleUpdate}
                  handleSubmit={handleSubmit}
                />
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center">
        <FavoriteMovies
          user={user}
          favoriteMovies={favoriteMovies}
        />
      </Row>
    </>
  );
};
