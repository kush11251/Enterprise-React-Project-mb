/** @author Staff Software Engineer */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/buttons/PrimaryButton';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users"><Button>Users</Button></Link>
    </div>
  );
};

export default Home;