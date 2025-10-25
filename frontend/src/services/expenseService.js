import { api } from './api';

export const expenseService = {
  getExpenses: async () => {
    try {
      const response = await api.getExpenses();
      return response;
    } catch (error) {
      console.error('Error fetching expenses:', error);
      return { success: false, message: 'Failed to fetch expenses' };
    }
  },
  
  addExpense: async (expenseData) => {
    // This would be an actual API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { id: Date.now(), ...expenseData } });
      }, 1000);
    });
  },
  
  updateExpense: async (id, expenseData) => {
    // This would be an actual API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { id, ...expenseData } });
      }, 1000);
    });
  }
};