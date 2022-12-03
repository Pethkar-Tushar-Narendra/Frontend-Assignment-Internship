import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Homescreen = () => {
  const navigate = useNavigate();
  useEffect(() => navigate('/rent'), []);
  return <></>;
};

export default Homescreen;
