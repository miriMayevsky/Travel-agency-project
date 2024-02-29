

import React from 'react';
import { useDispatch } from 'react-redux';
import { userOut } from './userSlice';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userOut());
  };

  return (
    <Link to="/exit" onClick={handleLogout}>
      יציאה מהאתר
    </Link>

  );
};

export default LogoutButton;
