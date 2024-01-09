import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Authservice.js';

function Login() {
  // Initialize the useNavigate hook from react-router-dom
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to show alerts with a message
  const showAlert = (message) => {
    alert(message);
    console.log(message);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Attempt to login using AuthService
    const user = AuthService.login(formData.username, formData.password);

    // Check if login was successful
    if (user) {
      showAlert('Login successful!');
      // Navigate to the dashboard on successful login
      navigate('/dashboard');
    } else {
      showAlert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Form for user login */}
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <label htmlFor="username">
          Username:
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        {/* Password input */}
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
