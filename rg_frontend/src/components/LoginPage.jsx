import React, { useState } from 'react';
import logo from './logo.png'; // Make sure to place logo.png in the appropriate directory

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => {
    // Placeholder function for the form submission logic
    alert("Form submitted!");
    // You can replace this with actual submission logic, e.g., an API call
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', fontFamily: 'Arial, sans-serif', color: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
      <header style={{ position: 'absolute', top: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <nav style={{ height: '100px', backgroundColor: '#2b7a78', width: '100%', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ height: '70px', width: '70px', marginRight: '15px', borderRadius: '5px' }} />
              <h2 style={{ fontSize: '1.8em', color: 'white', margin: 0 }}>SIT ResearchGate</h2>
            </a>
          </div>
        </nav>
      </header>

      <section id="div2" style={{ backgroundColor: 'white', border: '2px solid #e5e7eb', borderRadius: '10px', padding: '40px 30px', width: '300px', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5em', color: '#2b7a78', marginBottom: '20px' }}>Log into your Account.</h1>

        <form onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
          <label htmlFor="username" style={{ display: 'block', fontSize: '0.9em', textAlign: 'left', marginBottom: '5px' }}>Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px', color: '#333' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password" style={{ display: 'block', fontSize: '0.9em', textAlign: 'left', marginBottom: '5px' }}>Enter Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter Password"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', color: '#333' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
            <input type="checkbox" id="showPassword" onClick={togglePassword} style={{ marginRight: '5px' }} />
            <label htmlFor="showPassword" style={{ fontSize: '0.9em', color: '#333' }}>Show Password</label>
          </div>

          <button
            type="button"
            style={{ width: '100%', padding: '10px', fontSize: '1em', color: 'white', backgroundColor: '#1e90ff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            onClick={submitForm}
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
