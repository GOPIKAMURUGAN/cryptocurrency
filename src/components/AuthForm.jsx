import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      console.log(`${isLogin ? "Login" : "Signup"} success`);

      // 1. Navigate to home
      navigate('/');

      // 2. Close modal if passed
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box shadow">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>{isLogin ? 'Password' : 'Create Password'}</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-secondary btn-block mt-3">
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="toggle-text mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button className="btn btn-link p-0 ps-2" onClick={toggleForm}>
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
