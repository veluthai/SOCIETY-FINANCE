import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/admin/AdminDashboard';
import MemberDashboard from './pages/member/MemberDashboard';
import AdminComplaintsPage from './pages/admin/ComplaintsPage';
import AdminExpensesPage from './pages/admin/ExpensesPage';
import MemberComplaintsPage from './pages/member/ComplaintsPage';
import MemberExpensesPage from './pages/member/ExpensesPage';
import MemberNotificationsPage from './pages/member/NotificationsPage';
import AdminNotificationsPage from './pages/admin/NotificationsPage';

function App() {
  console.log('App component rendering');
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/:type" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/complaints" element={<AdminComplaintsPage />} />
            <Route path="/member/dashboard" element={<MemberDashboard />} />
            <Route path="/member/complaints" element={<MemberComplaintsPage />} />
            <Route path="/member/notifications" element={<MemberNotificationsPage />} />
            <Route path="/member/expenses" element={<MemberExpensesPage />} />
            <Route path="/admin/expenses" element={<AdminExpensesPage />} />
            <Route path="/admin/notifications" element={<AdminNotificationsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;