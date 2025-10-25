import { api } from './api';

export const notificationService = {
  getNotifications: async () => {
    try {
      const response = await api.getNotifications();
      return response;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      return { success: false, message: 'Failed to fetch notifications' };
    }
  },
  
  addNotification: async (notificationData) => {
    // This would be an actual API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { id: Date.now(), ...notificationData } });
      }, 1000);
    });
  },
  
  markAsRead: async (id) => {
    // This would be an actual API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { id, read: true } });
      }, 500);
    });
  }
};