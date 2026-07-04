import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import apiService from '../services/api.service';

/**
 * Dashboard component — shown after successful login.
 * Displays user profile and role-specific content.
 */
const Dashboard = () => {
  const { currentUser, logout, hasRole } = useAuth();
  const navigate = useNavigate();
  const [boardContent, setBoardContent] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Fetch role-specific content
    const fetchContent = async () => {
      try {
        if (hasRole('ROLE_ADMIN')) {
          const res = await apiService.getAdminBoard();
          setBoardContent(res.data.message);
        } else if (hasRole('ROLE_AGENT')) {
          const res = await apiService.getAgentBoard();
          setBoardContent(res.data.message);
        } else {
          const res = await apiService.getTravelerBoard();
          setBoardContent(res.data.message);
        }

        // Fetch full profile
        const profileRes = await apiService.getUserProfile();
        setProfile(profileRes.data);
      } catch (err) {
        console.error('Error fetching dashboard content:', err);
      }
    };

    fetchContent();
  }, [currentUser, navigate, hasRole]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getRoleBadgeClass = (role) => {
    if (role === 'ROLE_ADMIN') return 'badge badge-admin';
    if (role === 'ROLE_AGENT') return 'badge badge-agent';
    return 'badge badge-traveler';
  };

  if (!currentUser) return null;

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">🧳</span>
          <span className="logo-text">TripNest</span>
        </div>
        <div className="nav-actions">
          <span className="nav-username">Hello, {currentUser.username}!</span>
          <button
            id="logout-btn"
            className="btn btn-outline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* Welcome Banner */}
        <div className="welcome-card">
          <h1 className="welcome-title">
            Welcome, {currentUser.firstName || currentUser.username}! 👋
          </h1>
          <div className="roles-container">
            {currentUser.roles &&
              currentUser.roles.map((role) => (
                <span key={role} className={getRoleBadgeClass(role)}>
                  {role}
                </span>
              ))}
          </div>
          {boardContent && (
            <p className="board-message">{boardContent}</p>
          )}
        </div>

        {/* Profile Card */}
        <div className="profile-card">
          <h3 className="section-title">Your Profile</h3>
          <hr className="divider" />
          <div className="profile-grid">
            <div className="profile-item">
              <span className="profile-label">Username</span>
              <span className="profile-value">{currentUser.username}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Email</span>
              <span className="profile-value">{currentUser.email}</span>
            </div>
            {currentUser.firstName && (
              <div className="profile-item">
                <span className="profile-label">First Name</span>
                <span className="profile-value">{currentUser.firstName}</span>
              </div>
            )}
            {currentUser.lastName && (
              <div className="profile-item">
                <span className="profile-label">Last Name</span>
                <span className="profile-value">{currentUser.lastName}</span>
              </div>
            )}
            {currentUser.phone && (
              <div className="profile-item">
                <span className="profile-label">Phone</span>
                <span className="profile-value">{currentUser.phone}</span>
              </div>
            )}
            <div className="profile-item">
              <span className="profile-label">User ID</span>
              <span className="profile-value">{currentUser.id}</span>
            </div>
          </div>
        </div>

        {/* Role-specific panels */}
        <div className="panels-grid">
          {hasRole('ROLE_ADMIN') && (
            <div className="panel panel-admin">
              <h4>🔐 Admin Panel</h4>
              <p>You have full platform access. Manage users, roles, and configurations.</p>
            </div>
          )}
          {hasRole('ROLE_AGENT') && (
            <div className="panel panel-agent">
              <h4>🗂️ Agent Dashboard</h4>
              <p>Manage your travel packages, bookings, and client interactions.</p>
            </div>
          )}
          {hasRole('ROLE_TRAVELER') && (
            <div className="panel panel-traveler">
              <h4>✈️ Traveler Hub</h4>
              <p>Explore destinations, book trips, and manage your travel history.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
