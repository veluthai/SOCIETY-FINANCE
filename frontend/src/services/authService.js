import { api } from './api';

export const authService = {
  login: async (email, password, userType) => {
    try {
      const response = await api.login(email, password, userType);
      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed' };
    }
  },
  
  register: async (userData) => {
    try {
      const response = await api.register(userData);
      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
      }
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed' };
    }
  },
  
  logout: () => {
    localStorage.removeItem('user');
    return { success: true };
  },
  
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};