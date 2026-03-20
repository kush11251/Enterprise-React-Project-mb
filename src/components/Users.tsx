/** @author Staff Software Engineer */
import React, { useState, useEffect } from 'react';
import { UserService } from '../../services/api/v1/users';
import User from '../User';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const userService = new UserService();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await userService.getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}><User user={user} /></li>
        ))}
      </ul>
    </div>
  );
};

export default Users;