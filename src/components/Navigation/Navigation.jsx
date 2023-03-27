import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/users'>Users</Link>
      </div>
      <Outlet />
    </>
  );
};
