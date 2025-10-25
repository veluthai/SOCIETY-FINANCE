import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './ComplaintsPage.css';

const ComplaintsPage = () => {
  const { currentUser } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All Status');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newComplaint, setNewComplaint] = useState({
    title: '',
    description: '',
    category: 'Maintenance',
    priority: 'Medium'
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Simulate fetching complaints
    setTimeout(() => {
      setComplaints([
        {
          id: 1,
          title: 'Water Leakage in Bathroom',
          description: 'There is a water leakage in the bathroom of Flat B-12. The issue has been persisting for the past 3 days.',
          category: 'Maintenance',
          date: '2025-10-14',
          status: 'Pending',
          priority: 'High',
          reportedBy: currentUser?.name || 'John Doe',
          flat: currentUser?.buildingNumber || 'B-12',
          submittedToAdmin: true
        },
        {
          id: 2,
          title: 'Elevator Not Working',
          description: 'The elevator in Block B is not functioning properly. It stops between floors sometimes.',
          category: 'Maintenance',
          date: '2025-10-12',
          status: 'In Progress',
          priority: 'High',
          reportedBy: currentUser?.name || 'John Doe',
          flat: currentUser?.buildingNumber || 'B-12',
          submittedToAdmin: true
        },
        {
          id: 3,
          title: 'Garbage Disposal Issue',
          description: 'Garbage is not being collected regularly from the designated area in Block B.',
          category: 'Housekeeping',
          date: '2025-10-10',
          status: 'Resolved',
          priority: 'Medium',
          reportedBy: currentUser?.name || 'John Doe',
          flat: currentUser?.buildingNumber || 'B-12',
          submittedToAdmin: true
        },
        {
          id: 4,
          title: 'Street Light Not Working',
          description: 'The street light near the parking area is not working for the past week.',
          category: 'Maintenance',
          date: '2025-10-08',
          status: 'Pending',
          priority: 'Low',
          reportedBy: 'Jane Smith',
          flat: 'B-5',
          submittedToAdmin: true
        },
        {
          id: 5,
          title: 'Noise from Upstairs Flat',
          description: 'Excessive noise from the flat above during late night hours.',
          category: 'Other',
          date: '2025-10-05',
          status: 'Resolved',
          priority: 'Medium',
          reportedBy: 'Mike Johnson',
          flat: 'B-8',
          submittedToAdmin: true
        }
      ]);
      setLoading(false);
    }, 1000);
  }, [currentUser]);

  const handleSubmitComplaint = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');
    
    // Simulate API call to submit complaint to admin
    setTimeout(() => {
      const newId = Date.now();
      const complaint = {
        id: newId,
        title: newComplaint.title,
        description: newComplaint.description,
        category: newComplaint.category,
        date: new Date().toISOString().split('T')[0],
        status: 'Pending',
        priority: newComplaint.priority,
        reportedBy: currentUser?.name || 'Member',
        flat: currentUser?.buildingNumber || 'N/A',
        submittedToAdmin: true,
        adminNotified: true
      };
      
      setComplaints([complaint, ...complaints]);
      setNewComplaint({ title: '', description: '', category: 'Maintenance', priority: 'Medium' });
      setShowAddForm(false);
      setSubmitting(false);
      setSuccessMessage('Your complaint has been successfully submitted to the admin. You will receive updates on the status.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComplaint({
      ...newComplaint,
      [name]: value
    });
  };

  const handleFollowUp = (id) => {
    // Simulate sending follow-up message to admin
    const complaint = complaints.find(c => c.id === id);
    if (complaint) {
      setSuccessMessage(`Follow-up request sent for "${complaint.title}". Admin will review and update you soon.`);
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  const handleCheckStatus = (id) => {
    // Simulate checking status with admin
    const complaint = complaints.find(c => c.id === id);
    if (complaint) {
      setSuccessMessage(`Status check request sent for "${complaint.title}". Admin will provide an update soon.`);
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  const handleProvideFeedback = (id) => {
    // Simulate sending feedback to admin
    const complaint = complaints.find(c => c.id === id);
    if (complaint) {
      setSuccessMessage(`Feedback request sent for "${complaint.title}". Thank you for your feedback!`);
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    if (filter !== 'All Status' && complaint.status !== filter) return false;
    return true;
  });

  const pendingCount = complaints.filter(c => c.status === 'Pending').length;
  const inProgressCount = complaints.filter(c => c.status === 'In Progress').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved').length;

  if (loading) {
    return (
      <div className="complaints-page">
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="complaints-page">
      <div className="complaints-header">
        <h1>My Complaints</h1>
        <div className="complaint-stats">
          <div className="stat-card">
            <span className="stat-number">{complaints.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{pendingCount}</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{inProgressCount}</span>
            <span className="stat-label">In Progress</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{resolvedCount}</span>
            <span className="stat-label">Resolved</span>
          </div>
        </div>
      </div>
      
      {successMessage && (
        <div className="success-message">
          <div className="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4caf50">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5 5-1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="success-content">
            <h4>Success!</h4>
            <p>{successMessage}</p>
          </div>
          <button 
            className="close-success"
            onClick={() => setSuccessMessage('')}
          >
            ×
          </button>
        </div>
      )}
      
      <div className="complaints-controls">
        <div className="filter-controls">
          <select 
            className="filter-dropdown" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          
          <button 
            className="add-complaint-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Cancel' : 'Add Complaint'}
          </button>
        </div>
      </div>
      
      {showAddForm && (
        <div className="add-complaint-form">
          <div className="form-header">
            <h3>Submit New Complaint</h3>
            <p className="form-subtitle">Your complaint will be sent to the admin for review and action</p>
          </div>
          <form onSubmit={handleSubmitComplaint}>
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newComplaint.title}
                onChange={handleInputChange}
                placeholder="Brief description of the issue"
                required
                disabled={submitting}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={newComplaint.category}
                  onChange={handleInputChange}
                  disabled={submitting}
                >
                  <option value="Maintenance">Maintenance</option>
                  <option value="Housekeeping">Housekeeping</option>
                  <option value="Security">Security</option>
                  <option value="Noise">Noise</option>
                  <option value="Parking">Parking</option>
                  <option value="Water Supply">Water Supply</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="priority">Priority *</label>
                <select
                  id="priority"
                  name="priority"
                  value={newComplaint.priority}
                  onChange={handleInputChange}
                  disabled={submitting}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={newComplaint.description}
                onChange={handleInputChange}
                rows="4"
                placeholder="Please provide detailed information about your complaint"
                required
                disabled={submitting}
              ></textarea>
            </div>
            
            <div className="form-info">
              <div className="info-item">
                <strong>Your Name:</strong> {currentUser?.name || 'Member'}
              </div>
              <div className="info-item">
                <strong>Your Flat:</strong> {currentUser?.buildingNumber || 'N/A'}
              </div>
              <div className="info-item">
                <strong>Submission Date:</strong> {new Date().toLocaleDateString()}
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit to Admin'}
              </button>
              <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)} disabled={submitting}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="complaints-list">
        {filteredComplaints.length === 0 ? (
          <div className="no-complaints">
            <p>No complaints found</p>
          </div>
        ) : (
          filteredComplaints.map(complaint => (
            <div 
              key={complaint.id} 
              className={`complaint-item ${complaint.status.toLowerCase().replace(' ', '-')}`}
            >
              <div className="complaint-header">
                <div className="complaint-title">
                  <h3>{complaint.title}</h3>
                  <div className="complaint-meta">
                    <span className={`status-badge ${complaint.status.toLowerCase().replace(' ', '-')}`}>
                      {complaint.status}
                    </span>
                    <span className="complaint-category">{complaint.category}</span>
                    <span className={`priority-badge ${complaint.priority.toLowerCase()}`}>
                      {complaint.priority}
                    </span>
                    {complaint.adminNotified && (
                      <span className="admin-notified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#4caf50">
                          <path d="M5,13L9,17L7.5,15.5L11,12L6,7L1,12L11,17L5,13M22,3L2,12L5,15L8,12L22,3Z"/>
                        </svg>
                        Sent to Admin
                      </span>
                    )}
                  </div>
                </div>
                <div className="complaint-date">{complaint.date}</div>
              </div>
              
              <div className="complaint-content">
                <p>{complaint.description}</p>
              </div>
              
              <div className="complaint-footer">
                <div className="complaint-info">
                  <span className="info-item">
                    <strong>Reported:</strong> {complaint.date}
                  </span>
                  <span className="info-item">
                    <strong>Category:</strong> {complaint.category}
                  </span>
                  <span className="info-item">
                    <strong>Priority:</strong> {complaint.priority}
                  </span>
                </div>
              </div>
              
              <div className="complaint-actions">
                {complaint.status === 'Pending' && (
                  <>
                    <button className="follow-up-btn" onClick={() => handleFollowUp(complaint.id)}>
                      Follow Up
                    </button>
                    <button className="withdraw-btn" onClick={() => {
                      if (window.confirm('Are you sure you want to withdraw this complaint?')) {
                        setComplaints(complaints.filter(c => c.id !== complaint.id));
                      }
                    }}>
                      Withdraw
                    </button>
                  </>
                )}
                {complaint.status === 'In Progress' && (
                  <button className="follow-up-btn" onClick={() => handleCheckStatus(complaint.id)}>
                    Check Status
                  </button>
                )}
                {complaint.status === 'Resolved' && (
                  <button className="feedback-btn" onClick={() => handleProvideFeedback(complaint.id)}>
                    Provide Feedback
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

export default ComplaintsPage;