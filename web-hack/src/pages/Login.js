
import React, { useState } from 'react';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("[DEBUG] Login form submitted. Email:", email);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("[DEBUG] User logged in successfully:", userCredential.user);
      navigate('/StudentPortal');
    } catch (err) {
      console.error("[DEBUG] Error during login:", err.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="navbar">
        <span className="brand">MyApp</span>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* Login Container */}
      <div className="login-container">
        <div className="glass-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-primary">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <button
              className="btn-link"
              onClick={() => navigate('/SignUp')}
            >
              Sign Up
            </button>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
