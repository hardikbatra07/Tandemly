import { useState } from "react";
import { useAuthContext } from './useAuth';
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || 'Signup failed');
        return;
      }

      const { user, token } = json;

      const userWithToken = { ...user, token };

      localStorage.setItem('user', JSON.stringify(userWithToken));
      dispatch({ type: 'LOGIN', payload: userWithToken });
      setIsLoading(false);
      navigate('/profilesetup');
    } catch (err) {
      setIsLoading(false);
      setError('Network error or server down');
    }
  };

  return { signup, isLoading, error };
};
