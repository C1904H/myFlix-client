import React from 'react';
import PropTypes from 'prop-types';

export const UserInfo = ({ email, name }) => {
  return (
    <>
      <h4>My Details</h4>
      <p>Name: {name}</p>
      <p>E-mail: {email}</p>
    </>
  );
};

UserInfo.prototype = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
