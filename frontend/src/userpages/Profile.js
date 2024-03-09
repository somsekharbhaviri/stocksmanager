import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Registeration from './Registeration';
import './Profile.css';

export default function Profile() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    try {
      const response = await axios.post('http://localhost:2065/checkadminlogin', { email, password });
  
      if (response.data != null) {
        navigate("/aboutus"); 
      } else {
        const userResponse = await axios.post('http://localhost:2065/checkstockpurchaserlogin', { email, password });
  
        if (userResponse.data != null) {
          navigate("/accountprofile"); 
        } else {
          setMessage("Login Failed");
          setError("");
        }
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };
  
  return (
    <div className="profile-container">
      <h1 className="profile-heading"><u>Welcome to Profile Page</u></h1>

      {showLoginForm ? (
        <div className="login-form">
          <h2 className="form-heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div className="password-input">
                <input
                  type={formData.showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="button" className="show-password" onClick={togglePassword}>
                  <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <button type="submit" className="button">Login</button>
          </form>
          <p className="toggle-form-text">
            Don't have an account?{' '}
            <button onClick={toggleForm} className="toggle-form-button">Sign Up</button>
          </p>
        </div>
      ) : (
        <div className="registration-form">
          <h2 className="form-heading">Sign Up</h2>
          <Registeration />
          <h3 className="toggle-form-text">
            Already have an account?{' '}
            <button onClick={toggleForm} className="toggle-form-button">Login</button>
          </h3>
        </div>
      )}
    </div>
  );
}
