import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ title }) => {
  const { currentUser, userType, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <h1 className="header-title">{title}</h1>
            <h2 className="header-subtitle">Red Valley Apartment</h2>
          </div>
          <div className="header-right">
            {userType === 'admin' && (
              <div className="user-badge">Administrator</div>
            )}
            <div className="user-menu">
              <span className="user-name">{currentUser?.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;