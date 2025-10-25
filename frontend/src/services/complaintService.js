import { api } from './api';

export const complaintService = {
  getComplaints: async () => {
    try {
      const response = await api.getComplaints();
      return response;
    } catch (error) {
      console.error('Error fetching complaints:', error);
      return { success: false, message: 'Failed to fetch complaints' };
    }
  },
  
  addComplaint: async (complaintData) => {
    // This would be an actual API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { id: Date.now(), ...complaintData } });
      }, 1000);
    });
  },
  
  updateComplaint: async (id, status) => {
    // This would be an actual API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: { id, status } });
      }, 1000);
    });
  }
};