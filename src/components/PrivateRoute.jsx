import React from 'react';
import { navigate } from 'gatsby';
import useAuth from '../app/hooks/useAuth';

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn && location.pathname !== `/login`) {
    navigate('/login');
    return null;
  }

  return <Component {...rest} />;
}
