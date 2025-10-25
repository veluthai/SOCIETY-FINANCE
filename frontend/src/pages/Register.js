import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    buildingNumber: '',
    phoneNumber: '',
    emergencyContact: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState(false);

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
    
    if (registerError) {
      setRegisterError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.buildingNumber) {
      newErrors.buildingNumber = 'Building number is required';
    }
    
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
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
    setRegisterError('');
    
    try {
      const result = register(formData);
      
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/member/dashboard');
        }, 2000);
      } else {
        setRegisterError(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setRegisterError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1 className="register-title">Complete Your Registration</h1>
          <p className="register-subtitle">Fill in your details to access the dashboard</p>
        </div>
        
        {success && (
          <div className="alert alert-success">
            Registration successful! Redirecting to dashboard...
          </div>
        )}
        
        {registerError && (
          <div className="alert alert-danger">
            {registerError}
          </div>
        )}
        
        <form className="register-form" onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          
          <Input
            id="buildingNumber"
            name="buildingNumber"
            label="Building Number"
            placeholder="Enter your building number"
            value={formData.buildingNumber}
            onChange={handleChange}
            error={errors.buildingNumber}
            required
          />
          
          <Input
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            required
          />
          
          <Input
            id="emergencyContact"
            name="emergencyContact"
            label="Emergency Contact"
            type="tel"
            placeholder="Enter emergency contact number"
            value={formData.emergencyContact}
            onChange={handleChange}
            error={errors.emergencyContact}
          />
          
          <div className="form-group">
            <label htmlFor="address">Complete Address</label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          
          <Button
            type="submit"
            variant="secondary"
            size="large"
            className="btn-block"
            disabled={loading}
          >
            {loading ? <LoadingSpinner size="small" /> : 'Complete Registration & Go to Dashboard'}
          </Button>
        </form>
        
        <div className="form-footer">
          <p>Fields marked with * are required</p>
        </div>
      </div>
    </div>
  );
};

export default Register;