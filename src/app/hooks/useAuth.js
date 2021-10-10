import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { resetCredentials } from '../../features/authentication/authSlice';

export default function useAuth() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.token);

  useEffect(() => {
    setIsLoggedIn(!!auth.token);
  }, [auth]);

  const logout = () => {
    dispatch(resetCredentials());
  };

  return { isLoggedIn, auth, logout };
}
