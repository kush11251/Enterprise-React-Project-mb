/** @author Staff Software Engineer */
import React from 'react';

const User: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default User;