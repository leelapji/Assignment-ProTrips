import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Kalvium</h1>
      <nav>
        <Link to="/contacts">Contacts</Link> |{' '}
        <Link to="/registration-form">Registration Form</Link>
      </nav>
    </div>
  );
};

export default Home;
