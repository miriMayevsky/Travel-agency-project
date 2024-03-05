

import React from 'react';
import { useDispatch } from 'react-redux';
import { userOut } from './userSlice';
import { Link } from 'react-router-dom';
import '../../navBar.css';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userOut());
  };

  return (
    // <Link to="/exit" onClick={handleLogout} className="btn">
    //   exit 
    // </Link>
     <Link to="/exit" onClick={handleLogout}>
     <button className="btn">exit </button>
   </Link>

  );
};

export default LogoutButton;
