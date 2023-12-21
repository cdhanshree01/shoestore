import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {Link, useNavigate} from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
 
  const navigate = useNavigate();
 
  const handleSignIn = () => {    
    if (email && password) {
      setSignedIn(true);
      navigate('/');
    } else {
      setShowAlert(true);
    }
  };
 
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {showAlert && <p className="alert">Please enter email and password.</p>}
      {isSignedIn ? (
        <p>You are signed in. Redirecting to the home page...</p>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default SignUp;
