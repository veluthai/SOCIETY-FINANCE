import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const NotificationsPage = () => {
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All Types');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  useEffect(() => {
    // Simulate fetching notifications
    setTimeout(() => {
      setNotifications([
        {
          id: 1,
          title: 'Payment Due',
          message: 'Your monthly maintenance payment of ₹5,000 is due by October 31, 2025',
          date: '2025-10-14',
          type: 'Payment',
          priority: 'high',
          read: false
        },
        {
          id: 2,
          title: 'Community Meeting',
          message: 'Annual general body meeting scheduled for October 25, 2025 at 6:00 PM in the community hall',
          date: '2025-10-13',
          type: 'Meeting',
          priority: 'high',
          read: false
        },
        {
          id: 3,
          title: 'Water Supply Interruption',
          message: 'Water supply will be interrupted on October 20, 2025 from 10:00 AM to 2:00 PM for maintenance work',
          date: '2025-10-12',
          type: 'Maintenance',
          priority: 'medium',
          read: true
        },
        {
          id: 4,
          title: 'Festive Celebration',
          message: 'Diwali celebration event on October 24, 2025. All residents are invited to attend',
          date: '2025-10-11',
          type: 'Event',
          priority: 'low',
          read: true
        },
        {
          id: 5,
          title: 'Security Update',
          message: 'New security guards have been appointed for night duty. Please cooperate with them',
          date: '2025-10-10',
          type: 'Security',
          priority: 'medium',
          read: true
        },
        {
          id: 6,
          title: 'Parking Allocation',
          message: 'Parking spaces for Block B have been reallocated. Please check the new allocation list',
          date: '2025-10-09',
          type: 'Parking',
          priority: 'low',
          read: true
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (showUnreadOnly && notification.read) return false;
    if (filter !== 'All Types' && notification.type !== filter) return false;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const highPriorityCount = notifications.filter(n => n.priority === 'high').length;

  if (loading) {
    return (
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f5f5f5' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <div style={{
            border: '4px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '50%',
            borderTop: '4px solid #2196f3',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f5f5f5' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#333', margin: 0 }}>Notifications</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ background: 'white', borderRadius: '8px', padding: '15px 20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>{notifications.length}</span>
            <span style={{ fontSize: '0.875rem', color: '#666', marginTop: '5px' }}>Total</span>
          </div>
          <div style={{ background: 'white', borderRadius: '8px', padding: '15px 20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>{unreadCount}</span>
            <span style={{ fontSize: '0.875rem', color: '#666', marginTop: '5px' }}>Unread</span>
          </div>
          <div style={{ background: 'white', borderRadius: '8px', padding: '15px 20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>{highPriorityCount}</span>
            <span style={{ fontSize: '0.875rem', color: '#666', marginTop: '5px' }}>High Priority</span>
          </div>
          <div style={{ background: 'white', borderRadius: '8px', padding: '15px 20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>{notifications.length - unreadCount}</span>
            <span style={{ fontSize: '0.875rem', color: '#666', marginTop: '5px' }}>Read</span>
          </div>
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: '10px', padding: '20px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <select 
            style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.875rem', backgroundColor: 'white', cursor: 'pointer' }}
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All Types</option>
            <option>Payment</option>
            <option>Meeting</option>
            <option>Maintenance</option>
            <option>Event</option>
            <option>Security</option>
            <option>Parking</option>
          </select>
          
          <button 
            style={{ padding: '8px 15px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: showUnreadOnly ? '#2196f3' : 'white', color: showUnreadOnly ? 'white' : '#333', cursor: 'pointer', fontSize: '0.875rem' }}
            onClick={() => setShowUnreadOnly(!showUnreadOnly)}
          >
            Unread Only
          </button>
          
          <button 
            style={{ padding: '8px 15px', border: '1px solid #4caf50', borderRadius: '4px', backgroundColor: 'white', color: '#4caf50', cursor: 'pointer', fontSize: '0.875rem' }}
            onClick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark All Read
          </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filteredNotifications.length === 0 ? (
          <div style={{ background: 'white', borderRadius: '10px', padding: '40px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <p style={{ fontSize: '1.125rem', color: '#666', margin: 0 }}>No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map(notification => (
            <div 
              key={notification.id} 
              style={{ 
                background: notification.read ? 'white' : '#f8f9ff', 
                borderRadius: '10px', 
                padding: '20px', 
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                borderLeft: `4px solid ${notification.read ? '#ddd' : '#2196f3'}`,
                opacity: notification.read ? 0.8 : 1
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', color: '#333', margin: '0 0 5px 0' }}>{notification.title}</h3>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ 
                      padding: '3px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem', 
                      fontWeight: '500',
                      backgroundColor: notification.priority === 'high' ? '#ffebee' : notification.priority === 'medium' ? '#fff8e1' : '#e8f5e9',
                      color: notification.priority === 'high' ? '#d32f2f' : notification.priority === 'medium' ? '#ff8f00' : '#388e3c'
                    }}>
                      {notification.priority}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#666', backgroundColor: '#f5f5f5', padding: '3px 8px', borderRadius: '4px' }}>
                      {notification.type}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>{notification.date}</div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ fontSize: '0.9375rem', color: '#333', lineHeight: '1.5', margin: 0 }}>{notification.message}</p>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {!notification.read && (
                  <button 
                    style={{ padding: '6px 12px', border: '1px solid #2196f3', borderRadius: '4px', backgroundColor: 'white', color: '#2196f3', cursor: 'pointer', fontSize: '0.875rem' }}
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;