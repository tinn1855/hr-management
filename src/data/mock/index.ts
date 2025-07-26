// Export all mock data
export * from './employees';
export * from './departments';
export * from './operations';

// Common types
export type Status =
  | 'Active'
  | 'Inactive'
  | 'Pending'
  | 'Approved'
  | 'Rejected'
  | 'Paid'
  | 'Processing';

// Common utility functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('vi-VN');
};

export const formatDateTime = (date: string): string => {
  return new Date(date).toLocaleString('vi-VN');
};
