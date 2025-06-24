import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Eye, EyeOff,Github} from 'lucide-react'; // 👈 Add this import
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈 added
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };



  const togglePassword = () => {
    setShowPassword((prev) => !prev); // 👈 toggle logic
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to continue learning and sharing skills</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              required
            />
          </div>

                <div className="form-group password-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                    <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                    required
                    />
                    <span className="password-toggle-icon" onClick={togglePassword}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                </div>
         </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Logging In...
              </>
            ) : (
              'Login'
            )}
          </button>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠</span>
              {error}
            </div>
          )}
        </form>

       
        <div className="login-footer">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
