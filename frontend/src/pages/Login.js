import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { DEMO_CREDENTIALS } from '../utils/constants';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './Login.css';

const Login = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    if (loginError) {
      setLoginError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setLoginError('');
    
    try {
      const result = login(formData.email, formData.password, type);
      
      if (result.success) {
        console.log('Login successful, redirecting...');
        if (type === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/register');
        }
      } else {
        setLoginError(result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: DEMO_CREDENTIALS.admin.email,
      password: DEMO_CREDENTIALS.admin.password
    });
    setErrors({});
    setLoginError('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="app-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#6a0dad">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <h1 className="login-title">{type === 'admin' ? 'Admin Login' : 'Member Login'}</h1>
          <p className="login-subtitle">Red Valley Apartment</p>
        </div>
        
        {loginError && (
          <div className="alert alert-danger">
            {loginError}
          </div>
        )}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            id="email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="btn-block"
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" /> : 'Login'}
          </Button>
        </form>
        
        {type === 'admin' && (
          <div className="demo-credentials">
            <p>Demo Credentials:</p>
            <p>Email: admin@redvalley.com</p>
            <p>Password: admin123</p>
            <Button
              variant="outline"
              size="small"
              onClick={fillDemoCredentials}
            >
              Use Demo Credentials
            </Button>
          </div>
        )}
        
        <div className="login-footer">
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;