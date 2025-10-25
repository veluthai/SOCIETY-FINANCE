import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  const login = (email, password, type) => {
    console.log('Login attempt:', { email, password, type });
    
    if (type === 'admin' && email === 'admin@redvalley.com' && password === 'admin123') {
      const userData = { email, name: 'Administrator', id: 1 };
      setCurrentUser(userData);
      setIsAuthenticated(true);
      setUserType('admin');
      localStorage.setItem('user', JSON.stringify({ ...userData, userType: 'admin' }));
      console.log('Admin login successful');
      return { success: true };
    } else if (type === 'member' && email && password) {
      // For member login, we'll create a temporary user that will be updated during registration
      const userData = { 
        email, 
        name: 'Member', 
        id: Date.now(),
        tempUser: true // Mark as temporary user until registration is complete
      };
      setCurrentUser(userData);
      setIsAuthenticated(true);
      setUserType('member');
      localStorage.setItem('user', JSON.stringify({ ...userData, userType: 'member' }));
      console.log('Member login successful - pending registration');
      return { success: true };
    }
    console.log('Login failed');
    return { success: false, message: 'Invalid credentials' };
  };

  const register = (userData) => {
    console.log('Registration attempt:', userData);
    
    // Update the current user with registration data
    if (currentUser && currentUser.tempUser) {
      const updatedUserData = { 
        ...currentUser,
        ...userData,
        name: userData.name || 'John Doe',
        tempUser: false // Remove temporary flag
      };
      setCurrentUser(updatedUserData);
      localStorage.setItem('user', JSON.stringify({ ...updatedUserData, userType: 'member' }));
      console.log('Registration successful');
      return { success: true };
    } else {
      // New registration without prior login
      const newUserData = { 
        ...userData, 
        id: Date.now(),
        name: userData.name || 'John Doe',
        userType: 'member'
      };
      setCurrentUser(newUserData);
      setIsAuthenticated(true);
      setUserType('member');
      localStorage.setItem('user', JSON.stringify(newUserData));
      console.log('New registration successful');
      return { success: true };
    }
  };

  const logout = () => {
    console.log('Logging out');
    setCurrentUser(null);
    setIsAuthenticated(false);
    setUserType(null);
    localStorage.removeItem('user');
  };

  // Initialize auth state from localStorage
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setCurrentUser(userData);
        setIsAuthenticated(true);
        setUserType(userData.userType);
        console.log('Restored user from localStorage:', userData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const value = {
    currentUser,
    isAuthenticated,
    userType,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;