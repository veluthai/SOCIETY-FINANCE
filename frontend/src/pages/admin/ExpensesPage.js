// src/pages/admin/AdminExpensesPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminExpensesPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AdminExpensesPage: Component mounted');
    
    // 模拟数据
    const mockExpenses = [
      {
        id: 1,
        date: '01/10/2025',
        category: 'Maintenance',
        description: 'Elevator repair and servicing',
        vendor: 'ABC Elevators',
        amount: 25000,
        status: 'approved',
        invoice: 'INV001'
      },
      {
        id: 2,
        date: '08/10/2025',
        category: 'Cleaning',
        description: 'Cleaning supplies and equipment',
        vendor: 'CleanPro Supplies',
        amount: 8000,
        status: 'pending',
        invoice: 'INV002'
      },
      {
        id: 3,
        date: '15/10/2025',
        category: 'Utilities',
        description: 'Monthly electricity bill',
        vendor: 'City Power Company',
        amount: 15000,
        status: 'approved',
        invoice: 'INV003'
      },
      {
        id: 4,
        date: '20/10/2025',
        category: 'Security',
        description: 'Security guard monthly salary',
        vendor: 'SecureGuard Services',
        amount: 12000,
        status: 'approved',
        invoice: 'INV004'
      },
      {
        id: 5,
        date: '25/10/2025',
        category: 'Landscaping',
        description: 'Garden maintenance and plants',
        vendor: 'GreenThumb Landscaping',
        amount: 7000,
        status: 'pending',
        invoice: 'INV005'
      }
    ];

    console.log('AdminExpensesPage: Setting expenses data');
    setTimeout(() => {
      setExpenses(mockExpenses);
      setLoading(false);
      console.log('AdminExpensesPage: Expenses loaded:', mockExpenses.length);
    }, 1000);
  }, []);

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleApprove = (id) => {
    console.log('Approving expense:', id);
    const updatedExpenses = expenses.map(expense =>
      expense.id === id ? { ...expense, status: 'approved' } : expense
    );
    setExpenses(updatedExpenses);
    alert(`Expense #${id} has been approved`);
  };

  const handleReject = (id) => {
    console.log('Rejecting expense:', id);
    const updatedExpenses = expenses.map(expense =>
      expense.id === id ? { ...expense, status: 'rejected' } : expense
    );
    setExpenses(updatedExpenses);
    alert(`Expense #${id} has been rejected`);
  };

  const handleExport = () => {
    console.log('Exporting expenses');
    alert('Export functionality will download CSV file with all expenses');
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { backgroundColor: '#fff3cd', color: '#856404', text: 'PENDING' },
      approved: { backgroundColor: '#d4edda', color: '#155724', text: 'APPROVED' },
      rejected: { backgroundColor: '#f8d7da', color: '#721c24', text: 'REJECTED' }
    };
    return badges[status] || badges.pending;
  };

  if (loading) {
    return (
      <div style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '20px',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #f59e0b',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 15px'
          }}></div>
          <p>Loading expenses...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa'
    }}>
      {/* Debug Info */}
      <div style={{
        background: '#e3f2fd',
        border: '1px solid #2196f3',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        fontSize: '14px',
        color: '#1565c0'
      }}>
        <strong>Debug Info:</strong> Loaded {expenses.length} expenses | User: {user?.name}
      </div>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              Expenses Management
            </h1>
            <p style={{ fontSize: '16px', opacity: '0.9', margin: 0 }}>
              Track and manage all society expenses
            </p>
          </div>
          <button
            onClick={() => navigate('/admin/dashboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '25px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px'
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 8px 0' }}>
              Total Expenses
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
              ₹{expenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString('en-IN')}
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
              All time
            </p>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '25px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px'
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 8px 0' }}>
              Pending Approval
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
              ₹{expenses.filter(e => e.status === 'pending').reduce((sum, e) => sum + e.amount, 0).toLocaleString('en-IN')}
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
              Awaiting review
            </p>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '25px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px'
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 8px 0' }}>
              Approved
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
              ₹{expenses.filter(e => e.status === 'approved').reduce((sum, e) => sum + e.amount, 0).toLocaleString('en-IN')}
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
              This month
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => alert('Add expense functionality coming soon!')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M19,13H13V19H11V13H5V11H13V5H19M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z"/>
          </svg>
          Add Expense
        </button>
        <button
          onClick={handleExport}
          style={{
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
          </svg>
          Export
        </button>
      </div>

      {/* Expenses Table */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        overflowX: 'auto'
      }}>
        <h2 style={{ fontSize: '20px', color: '#2c3e50', margin: '0 0 20px 0' }}>
          All Expenses
        </h2>
        
        {expenses.length > 0 ? (
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Date</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Category</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Description</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Vendor</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Amount</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Status</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
                <tr 
                  key={expense.id} 
                  style={{
                    borderBottom: '1px solid #e9ecef',
                    transition: 'backgroundColor 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.date}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.category}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.description}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.vendor}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057', fontWeight: '600' }}>
                    {formatAmount(expense.amount)}
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      ...getStatusBadge(expense.status)
                    }}>
                      {getStatusBadge(expense.status).text}
                    </span>
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {expense.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(expense.id)}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#10b981',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              fontSize: '12px',
                              cursor: 'pointer'
                            }}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(expense.id)}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              fontSize: '12px',
                              cursor: 'pointer'
                            }}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            No expenses found
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminExpensesPage;