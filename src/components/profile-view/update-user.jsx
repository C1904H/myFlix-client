import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

// Export Update user details form to profile view
export const UpdateUser = ({ formData, handleUpdate, handleSubmit }) => {
  return (
    <Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            minLength={5}
            value={formData.Username}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={formData.Password}
            onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label> Email: </Form.Label>
          <Form.Control
            type="email"
            value={formData.Email}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label> Birthday: </Form.Label>
          <Form.Control
            type="date"
            value={formData.Birthday}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <br />
        <Button
          variant="info"
          type="submit"
        >
          {' '}
          Submit changes{' '}
        </Button>
      </Form>
    </Row>
  );
};
// Define prop types
UpdateUser.propTypes = {
  formData: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
