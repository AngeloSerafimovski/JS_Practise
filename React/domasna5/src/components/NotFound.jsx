import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <h2>Go <Link to='/'>Home</Link></h2>
    </div>
  );
};