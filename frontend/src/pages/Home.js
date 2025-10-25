import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="app-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#6a0dad">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <h1 className="app-title">Welcome to Red Valley Apartment</h1>
        <p className="app-subtitle">Comprehensive society financial management system for residents and administrators</p>
      </div>
      
      <div className="login-options">
        <div className="login-card admin-card">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#6a0dad">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h2>Admin Portal</h2>
            <p>Manage society finances, track expenses, and monitor payment transactions</p>
          </div>
          <Link to="/login/admin" className="login-btn admin-btn">Admin Login</Link>
        </div>
        
        <div className="login-card member-card">
          <div className="card-content">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#4caf50">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h2>Member Portal</h2>
            <p>View your payments, track society activities, and manage your account</p>
          </div>
          <Link to="/login/member" className="login-btn member-btn">Member Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;