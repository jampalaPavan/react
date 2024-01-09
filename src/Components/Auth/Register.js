import React, { useState } from 'react';
import AuthService from '../../Authservice.js';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap'; 

function Register() {
  // Initialize the useNavigate hook from react-router-dom
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Register user using AuthService
    AuthService.register(formData);

    // Navigate to the login page after successful registration
    navigate('/login');
  };

  return (
    <Card>
      <Card.Body>
        <h2>Register</h2>
        {/* Registration form using react-bootstrap components */}
        <Form onSubmit={handleSubmit}>
          {/* Username input */}
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Password input */}
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Email input */}
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* First Name input */}
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Last Name input */}
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Submit button */}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register;
