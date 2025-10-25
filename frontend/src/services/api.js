// This is a mock API service that would be replaced with actual API calls
export const api = {
  // Authentication endpoints
  login: (email, password, userType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (userType === 'admin' && email === 'admin@redvalley.com' && password === 'admin123') {
          resolve({ success: true, data: { email, name: 'Administrator', userType: 'admin' } });
        } else if (userType === 'member') {
          resolve({ success: true, data: { email, name: 'Member', userType: 'member' } });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
      }, 1000);
    });
  },
  
  register: (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { ...userData, userType: 'member' } });
      }, 1000);
    });
  },
  
  // Dashboard data
  getDashboardStats: (userType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (userType === 'admin') {
          resolve({
            totalMembers: 45,
            pendingComplaints: 4,
            totalExpenses: '₹1,25,000',
            monthlyCollection: '₹4,50,000'
          });
        } else {
          resolve({
            monthlyMaintenance: '₹5,000',
            pendingDues: '₹2,500',
            lastPayment: '₹5,000',
            paymentStatus: 'Paid'
          });
        }
      }, 500);
    });
  },
  
  // Complaints
  getComplaints: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Water leakage in B block', status: 'pending', date: '2023-10-14' },
          { id: 2, title: 'Gym equipment not working', status: 'pending', date: '2023-10-13' },
          { id: 3, title: 'Street light not working', status: 'pending', date: '2023-10-12' },
          { id: 4, title: 'Elevator maintenance required', status: 'pending', date: '2023-10-11' }
        ]);
      }, 500);
    });
  },
  
  // Expenses
  getExpenses: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Security Services', amount: '₹50,000', date: '2023-10-01' },
          { id: 2, title: 'Maintenance', amount: '₹30,000', date: '2023-10-05' },
          { id: 3, title: 'Electricity Bill', amount: '₹25,000', date: '2023-10-10' },
          { id: 4, title: 'Water Supply', amount: '₹20,000', date: '2023-10-12' }
        ]);
      }, 500);
    });
  },
  
  // Notifications
  getNotifications: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Maintenance notice', message: 'Scheduled maintenance on Oct 20', date: '2023-10-14' },
          { id: 2, title: 'Payment reminder', message: 'Your maintenance payment is due', date: '2023-10-13' },
          { id: 3, title: 'Community event', message: 'Diwali celebration on Oct 24', date: '2023-10-12' }
        ]);
      }, 500);
    });
  }
};