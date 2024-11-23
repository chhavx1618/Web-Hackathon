import React, { useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("[DEBUG] Sign-up form submitted. Email:", email);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("[DEBUG] User signed up successfully:", userCredential.user);
      navigate('/student-portal');
    } catch (err) {
      console.error("[DEBUG] Error during sign-up:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="glass-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <button
            className="btn-link"
            onClick={() => navigate('/')}
          >
            Login
          </button>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
