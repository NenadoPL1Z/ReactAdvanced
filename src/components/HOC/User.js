import React from 'react';

const User = ({user}) => {
  return (
    <div>
      <strong>{user.name} ({user.username})</strong>
      <br/>
      <strong>{user.email}</strong>
    </div>
  );
};

export default User;