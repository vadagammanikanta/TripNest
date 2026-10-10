import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Dashboard component — simple welcome message.
 */
const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!currentUser) return null;

  return (
    <div className="auth-wrapper">
      <div className="auth-card" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
          Welcome, {currentUser.firstName || currentUser.username}! 👋
        </h1>
        <p style={{ color: 'var(--color-success)', fontWeight: '600', marginBottom: '1.5rem' }}>
          Logged in successfully!
        </p>
        
        <button
          id="logout-btn"
          className="btn btn-outline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
