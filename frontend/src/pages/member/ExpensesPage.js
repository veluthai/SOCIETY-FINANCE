// src/pages/member/MemberExpensesPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MemberExpensesPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    // 模拟数据加载
    const mockExpenses = [
      {
        id: 1,
        month: 'October 2025',
        amount: 5000,
        dueDate: '05/11/2025',
        status: 'paid',
        paymentDate: '01/10/2025',
        paymentMethod: 'Online Transfer',
        receipt: 'REC001'
      },
      {
        id: 2,
        month: 'September 2025',
        amount: 5000,
        dueDate: '05/10/2025',
        status: 'paid',
        paymentDate: '02/09/2025',
        paymentMethod: 'Cheque',
        receipt: 'REC002'
      },
      {
        id: 3,
        month: 'August 2025',
        amount: 5000,
        dueDate: '05/09/2025',
        status: 'paid',
        paymentDate: '01/08/2025',
        paymentMethod: 'Online Transfer',
        receipt: 'REC003'
      },
      {
        id: 4,
        month: 'July 2025',
        amount: 5000,
        dueDate: '05/08/2025',
        status: 'paid',
        paymentDate: '03/07/2025',
        paymentMethod: 'Cash',
        receipt: 'REC004'
      },
      {
        id: 5,
        month: 'June 2025',
        amount: 5000,
        dueDate: '05/07/2025',
        status: 'paid',
        paymentDate: '01/06/2025',
        paymentMethod: 'Online Transfer',
        receipt: 'REC005'
      },
      {
        id: 6,
        month: 'November 2025',
        amount: 5000,
        dueDate: '05/12/2025',
        status: 'pending',
        paymentDate: null,
        paymentMethod: null,
        receipt: null
      }
    ];

    // 模拟加载延迟
    setTimeout(() => {
      setExpenses(mockExpenses);
      setLoading(false);
      console.log('Expenses loaded:', mockExpenses.length, 'items');
    }, 500);
  }, []);

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handlePayNow = () => {
    alert('Payment feature will be available soon!');
  };

  const handleDownloadReceipt = (receipt) => {
    alert(`Downloading receipt: ${receipt}`);
  };

  const handleDownloadStatement = () => {
    alert('Downloading annual statement...');
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
            borderTop: '4px solid #3498db',
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
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
              Track your monthly contributions and payment history
            </p>
          </div>
          <button
            onClick={() => navigate('/member/dashboard')}
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
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px'
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 8px 0' }}>
              Monthly Contribution
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
              ₹5,000
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
              Due on 5th of each month
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
              Total Paid
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
              ₹25,000
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
              This year
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
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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
              Pending Amount
            </h3>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
              ₹5,000
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>
              Due this month
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
          onClick={handlePayNow}
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
            <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"/>
          </svg>
          Pay Now
        </button>
        <button
          onClick={handleDownloadStatement}
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
          Download Statement
        </button>
      </div>

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
        <strong>Debug Info:</strong> Loaded {expenses.length} expenses
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
          Payment History
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
                }}>Month</th>
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
                }}>Due Date</th>
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
                }}>Payment Date</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Payment Method</th>
                <th style={{
                  padding: '12px 15px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#2c3e50',
                  borderBottom: '1px solid #e9ecef'
                }}>Receipt</th>
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
                    {expense.month}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057', fontWeight: '600' }}>
                    {formatAmount(expense.amount)}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.dueDate}
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      backgroundColor: expense.status === 'paid' ? '#d4edda' : '#fff3cd',
                      color: expense.status === 'paid' ? '#155724' : '#856404'
                    }}>
                      {expense.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.paymentDate || '-'}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.paymentMethod || '-'}
                  </td>
                  <td style={{ padding: '12px 15px', color: '#495057' }}>
                    {expense.receipt || '-'}
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    {expense.receipt && (
                      <button
                        onClick={() => handleDownloadReceipt(expense.receipt)}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: '#17a2b8',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        Download
                      </button>
                    )}
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

      {/* Payment Modal */}
      {showPaymentModal && (
        <div style={{
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
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '90%'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#2c3e50', margin: '0 0 20px 0' }}>
              Make Payment
            </h2>
            <p>Payment feature will be available soon!</p>
            <button
              onClick={() => setShowPaymentModal(false)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberExpensesPage;