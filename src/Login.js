
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Login = ({ login }) => {
  const [tab, setTab] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both fields.');
      return;
    }
    const success = login(username, password);
    if (success) {
      setError('');
      navigate('/account');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <button className="login-back-btn" onClick={() => window.history.back()} title="Back" aria-label="Back">
          <span style={{fontSize:'1.5em',fontWeight:700,verticalAlign:'middle'}}>&larr;</span>
        </button>
        <div className="login-tabs">
          <button className={tab === 'password' ? 'active' : ''} onClick={() => setTab('password')}>Password</button>
          <button className={tab === 'phone' ? 'active' : ''} onClick={() => setTab('phone')}>Phone Number</button>
        </div>
        {showSignup ? (
          <form className="login-form" style={{marginTop:'1.2rem'}}>
            <input type="text" placeholder="Your Name" className="login-input" required />
            <input type="email" placeholder="Your Email" className="login-input" required />
            <div className="login-password-row">
              <input type={showPassword ? 'text' : 'password'} placeholder="Create a Password" className="login-input" required />
              <span className="login-eye" onClick={() => setShowPassword(v => !v)} title="Show/Hide Password" style={{cursor:'pointer'}}>
                {showPassword ? '🙈' : <svg width="1.2em" height="1.2em" viewBox="0 0 576 512" fill="currentColor"><path d="M572.52 241.4C518.7 135.5 407.8 64 288 64S57.3 135.5 3.48 241.4a48.35 48.35 0 0 0 0 29.2C57.3 376.5 168.2 448 288 448s230.7-71.5 284.52-177.4a48.35 48.35 0 0 0 0-29.2zM288 400c-97.2 0-189.8-57.6-238.8-144C98.2 169.6 190.8 112 288 112s189.8 57.6 238.8 144C477.8 342.4 385.2 400 288 400zm0-272a128 128 0 1 0 128 128A128 128 0 0 0 288 128zm0 208a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"/></svg>}
              </span>
            </div>
            <button className="login-btn" type="submit">Sign Up</button>
            <div className="login-signup-row" style={{marginTop:'1.1rem'}}>
              <span>Already have an account? <a href="#" className="login-signup-link" onClick={e => {e.preventDefault();setShowSignup(false);}}>Login</a></span>
            </div>
          </form>
        ) : (
        <>
        {tab === 'password' && (
          <form className="login-form" onSubmit={handleLogin}>
            <input type="text" placeholder="Enter Your Email or Username" className="login-input" value={username} onChange={e => setUsername(e.target.value)} required />
            <div className="login-password-row">
              <input type={showPassword ? 'text' : 'password'} placeholder="Enter Your Password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} required />
              <span className="login-eye" onClick={() => setShowPassword(v => !v)} title="Show/Hide Password" style={{cursor:'pointer'}}>
                {showPassword ? '🙈' : <svg width="1.2em" height="1.2em" viewBox="0 0 576 512" fill="currentColor"><path d="M572.52 241.4C518.7 135.5 407.8 64 288 64S57.3 135.5 3.48 241.4a48.35 48.35 0 0 0 0 29.2C57.3 376.5 168.2 448 288 448s230.7-71.5 284.52-177.4a48.35 48.35 0 0 0 0-29.2zM288 400c-97.2 0-189.8-57.6-238.8-144C98.2 169.6 190.8 112 288 112s189.8 57.6 238.8 144C477.8 342.4 385.2 400 288 400zm0-272a128 128 0 1 0 128 128A128 128 0 0 0 288 128zm0 208a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"/></svg>}
              </span>
            </div>
            <div className="login-row-between">
              <span></span>
              <a href="#" className="login-forgot">Forgot password?</a>
            </div>
            {error && <div style={{color:'red',marginBottom:10}}>{error}</div>}
            <button className="login-btn" type="submit">LOGIN</button>
          </form>
        )}
        {tab === 'phone' && (
          <form className="login-form">
            <input type="text" placeholder="Enter Your Phone Number" className="login-input" required />
            <button className="login-btn" type="submit">Continue</button>
          </form>
        )}
        <div className="login-signup-row">
          <span>Don't have an account? <a href="#" className="login-signup-link" onClick={e => {e.preventDefault();setShowSignup(true);}}>Sign up</a></span>
        </div>
        <div className="login-or">Or, login with</div>
        <div className="login-socials">
          <button className="login-social-btn google"><i className="fab fa-google"></i> Google</button>
          <button className="login-social-btn facebook"><i className="fab fa-facebook"></i> Facebook</button>
        </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Login;
