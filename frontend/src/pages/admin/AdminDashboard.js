// src/pages/admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    totalMembers: 45,
    totalComplaints: 28,
    pendingComplaints: 8,
    resolvedComplaints: 15,
    totalExpenses: 250000,
    pendingExpenses: 15000,
    totalNotifications: 42,
    unreadNotifications: 8,
    monthlyCollection: 450000,
    pendingApprovals: 2
  });
  const [loading, setLoading] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setStats({
        totalMembers: 45,
        totalComplaints: 28,
        pendingComplaints: 8,
        resolvedComplaints: 15,
        totalExpenses: 250000,
        pendingExpenses: 15000,
        totalNotifications: 42,
        unreadNotifications: 8,
        monthlyCollection: 450000,
        pendingApprovals: 2
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleViewComplaints = () => {
    navigate('/admin/complaints');
  };

  const handleViewExpenses = () => {
    navigate('/admin/expenses');
  };

  const handleViewNotifications = () => {
    navigate('/admin/notifications');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const styles = {
    dashboard: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    },
    header: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '30px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    },
    headerLeft: {
      flex: '1'
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: '700',
      margin: '0 0 8px 0'
    },
    headerSubtitle: {
      fontSize: '16px',
      opacity: '0.9',
      margin: '0'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    userInfo: {
      textAlign: 'right'
    },
    userName: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 4px 0'
    },
    userRole: {
      fontSize: '14px',
      opacity: '0.8',
      margin: '0'
    },
    logoutBtn: {
      padding: '10px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    welcomeSection: {
      background: 'white',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '30px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
    },
    welcomeTitle: {
      fontSize: '24px',
      color: '#2c3e50',
      margin: '0 0 10px 0'
    },
    welcomeText: {
      fontSize: '16px',
      color: '#6c757d',
      margin: '0'
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px'
    },
    spinner: {
      border: '4px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '50%',
      borderTop: '4px solid #667eea',
      width: '40px',
      height: '40px',
      animation: 'spin 1s linear infinite'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent'
    },
    cardIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '20px',
      flexShrink: '0'
    },
    membersIcon: {
      background: 'linear-gradient(135deg, #6a0dad 0%, #4a148c 100%)'
    },
    complaintsIcon: {
      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    expensesIcon: {
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    notificationsIcon: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    collectionIcon: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    approvalsIcon: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    cardContent: {
      flex: '1'
    },
    cardTitle: {
      fontSize: '16px',
      color: '#6b7280',
      margin: '0 0 8px 0',
      fontWeight: '500'
    },
    cardValue: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#1f2937',
      margin: '0 0 4px 0'
    },
    cardSubtitle: {
      fontSize: '14px',
      color: '#9ca3af',
      margin: '0'
    },
    quickActionsSection: {
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '24px',
      color: '#2c3e50',
      margin: '0 0 20px 0',
      fontWeight: '600'
    },
    actionsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    },
    actionCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent',
      textAlign: 'center'
    },
    complaintsAction: {
      borderColor: '#ef4444',
      backgroundColor: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.05) 100%)'
    },
    expensesAction: {
      borderColor: '#f59e0b',
      backgroundColor: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%)'
    },
    notificationsAction: {
      borderColor: '#8b5cf6',
      backgroundColor: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)'
    },
    actionIcon: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '32px'
    },
    actionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#2c3e50',
      margin: '0 0 10px 0'
    },
    actionDescription: {
      fontSize: '14px',
      color: '#6c757d',
      margin: '0 0 20px 0',
      lineHeight: '1.5'
    },
    actionBtn: {
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none'
    },
    complaintsBtn: {
      backgroundColor: '#ef4444',
      color: 'white'
    },
    expensesBtn: {
      backgroundColor: '#f59e0b',
      color: 'white'
    },
    notificationsBtn: {
      backgroundColor: '#8b5cf6',
      color: 'white'
    },
    recentActivity: {
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
    },
    activityList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    activityItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      borderLeft: '4px solid #667eea'
    },
    activityIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#667eea',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      flexShrink: '0'
    },
    activityContent: {
      flex: '1'
    },
    activityTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#2c3e50',
      margin: '0 0 4px 0'
    },
    activityTime: {
      fontSize: '12px',
      color: '#6c757d',
      margin: '0'
    },
    confirmDialog: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000'
    },
    confirmContent: {
      background: 'white',
      padding: '30px',
      borderRadius: '12px',
      maxWidth: '400px',
      width: '90%',
      textAlign: 'center'
    },
    confirmTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#2c3e50',
      margin: '0 0 15px 0'
    },
    confirmButtons: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center'
    },
    confirmBtn: {
      padding: '10px 20px',
      borderRadius: '6px',
      fontSize: '14px',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.3s ease'
    },
    confirmYes: {
      backgroundColor: '#ef4444',
      color: 'white'
    },
    confirmNo: {
      backgroundColor: '#6b7280',
      color: 'white'
    }
  };

  if (loading) {
    return (
      <div style={styles.dashboard}>
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.dashboard}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <h1 style={styles.headerTitle}>Admin Dashboard</h1>
            <p style={styles.headerSubtitle}>Red Valley Apartment Society Management</p>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.userInfo}>
              <div style={styles.userName}>{user?.name}</div>
              <div style={styles.userRole}>Administrator</div>
            </div>
            <button 
              style={styles.logoutBtn}
              onClick={() => setShowLogoutConfirm(true)}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div style={styles.welcomeSection}>
        <h2 style={styles.welcomeTitle}>Welcome back, Administrator! 👋</h2>
        <p style={styles.welcomeText}>
          Manage society finances, monitor complaints, and send important notifications to residents.
        </p>
      </div>

      {/* Statistics Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{...styles.cardIcon, ...styles.membersIcon}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Total Members</h3>
            <p style={styles.cardValue}>{stats.totalMembers}</p>
            <p style={styles.cardSubtitle}>Active residents</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{...styles.cardIcon, ...styles.complaintsIcon}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,11L8,15H10.5V18H13.5V15H16L12,11Z"/>
            </svg>
          </div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Total Complaints</h3>
            <p style={styles.cardValue}>{stats.totalComplaints}</p>
            <p style={styles.cardSubtitle}>{stats.pendingComplaints} pending, {stats.resolvedComplaints} resolved</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{...styles.cardIcon, ...styles.expensesIcon}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z"/>
            </svg>
          </div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Total Expenses</h3>
            <p style={styles.cardValue}>{formatAmount(stats.totalExpenses)}</p>
            <p style={styles.cardSubtitle}>{formatAmount(stats.pendingExpenses)} pending approval</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{...styles.cardIcon, ...styles.notificationsIcon}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
            </svg>
          </div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Notifications</h3>
            <p style={styles.cardValue}>{stats.totalNotifications}</p>
            <p style={styles.cardSubtitle}>{stats.unreadNotifications} unread</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{...styles.cardIcon, ...styles.collectionIcon}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"/>
            </svg>
          </div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Monthly Collection</h3>
            <p style={styles.cardValue}>{formatAmount(stats.monthlyCollection)}</p>
            <p style={styles.cardSubtitle}>This month</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={{...styles.cardIcon, ...styles.approvalsIcon}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
          </div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Pending Approvals</h3>
            <p style={styles.cardValue}>{stats.pendingApprovals}</p>
            <p style={styles.cardSubtitle}>Awaiting review</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.quickActionsSection}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <div style={styles.actionsContainer}>
          <div 
            style={{...styles.actionCard, ...styles.complaintsAction}}
            onClick={handleViewComplaints}
          >
            <div style={{...styles.actionIcon, ...styles.complaintsIcon}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,11L8,15H10.5V18H13.5V15H16L12,11Z"/>
              </svg>
            </div>
            <h3 style={styles.actionTitle}>Manage Complaints</h3>
            <p style={styles.actionDescription}>
              Review and resolve resident complaints efficiently
            </p>
            <button style={{...styles.actionBtn, ...styles.complaintsBtn}}>
              View All Complaints
            </button>
          </div>
          
          <div 
            style={{...styles.actionCard, ...styles.expensesAction}}
            onClick={handleViewExpenses}
          >
            <div style={{...styles.actionIcon, ...styles.expensesIcon}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z"/>
              </svg>
            </div>
            <h3 style={styles.actionTitle}>Manage Expenses</h3>
            <p style={styles.actionDescription}>
              Track society expenses and approve pending payments
            </p>
            <button style={{...styles.actionBtn, ...styles.expensesBtn}}>
              View All Expenses
            </button>
          </div>
          
          <div 
            style={{...styles.actionCard, ...styles.notificationsAction}}
            onClick={handleViewNotifications}
          >
            <div style={{...styles.actionIcon, ...styles.notificationsIcon}}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
              </svg>
            </div>
            <h3 style={styles.actionTitle}>Send Notifications</h3>
            <p style={styles.actionDescription}>
              Create and send important announcements to residents
            </p>
            <button style={{...styles.actionBtn, ...styles.notificationsBtn}}>
              Manage Notifications
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={styles.recentActivity}>
        <h2 style={styles.sectionTitle}>Recent Activity</h2>
        <div style={styles.activityList}>
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,11L8,15H10.5V18H13.5V15H16L12,11Z"/>
              </svg>
            </div>
            <div style={styles.activityContent}>
              <div style={styles.activityTitle}>New Complaint Filed</div>
              <div style={styles.activityTime}>Water leakage issue in Unit B-205 - 2 hours ago</div>
            </div>
          </div>
          
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z"/>
              </svg>
            </div>
            <div style={styles.activityContent}>
              <div style={styles.activityTitle}>New Expense Added</div>
              <div style={styles.activityTime}>Elevator maintenance cost ₹25,000 - 5 hours ago</div>
            </div>
          </div>
          
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
              </svg>
            </div>
            <div style={styles.activityContent}>
              <div style={styles.activityTitle}>Notification Sent</div>
              <div style={styles.activityTime}>Elevator maintenance notice sent to all residents - 1 day ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirm && (
        <div style={styles.confirmDialog}>
          <div style={styles.confirmContent}>
            <h3 style={styles.confirmTitle}>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div style={styles.confirmButtons}>
              <button 
                style={{...styles.confirmBtn, ...styles.confirmYes}}
                onClick={handleLogout}
              >
                Yes, Logout
              </button>
              <button 
                style={{...styles.confirmBtn, ...styles.confirmNo}}
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;