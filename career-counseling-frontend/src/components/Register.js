// src/components/Register.js
import React, { useState } from 'react';
import apiService from '../apiService';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    // Add other fields here (phone_number, name, etc.)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await apiService.post('register/', userData);
      console.log('User registered:', response.data);
      // Handle success, redirect, or show a success message
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error, show an error message, or provide feedback to the user
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      {/* Add input fields for other user data */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
