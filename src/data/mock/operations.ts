// Attendance Mock Data
export interface Attendance {
  id: number;
  employeeId: number;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: 'Present' | 'Late' | 'Absent' | 'Half Day';
  workingHours: number;
  overtime: number;
}

export const mockAttendance: Attendance[] = [
  {
    id: 1,
    employeeId: 1,
    employeeName: 'Nguyen Van A',
    date: '2025-01-26',
    checkIn: '08:00',
    checkOut: '17:00',
    status: 'Present',
    workingHours: 8,
    overtime: 0,
  },
  {
    id: 2,
    employeeId: 2,
    employeeName: 'Tran Thi B',
    date: '2025-01-26',
    checkIn: '08:30',
    checkOut: '17:30',
    status: 'Late',
    workingHours: 8,
    overtime: 0.5,
  },
  {
    id: 3,
    employeeId: 3,
    employeeName: 'Le Van C',
    date: '2025-01-26',
    checkIn: '08:00',
    checkOut: '18:00',
    status: 'Present',
    workingHours: 8,
    overtime: 2,
  },
  {
    id: 4,
    employeeId: 4,
    employeeName: 'Pham Thi D',
    date: '2025-01-26',
    checkIn: '',
    checkOut: '',
    status: 'Absent',
    workingHours: 0,
    overtime: 0,
  },
  {
    id: 5,
    employeeId: 5,
    employeeName: 'Hoang Van E',
    date: '2025-01-26',
    checkIn: '08:00',
    checkOut: '19:00',
    status: 'Present',
    workingHours: 8,
    overtime: 3,
  },
];

// Payroll Mock Data
export interface Payroll {
  id: number;
  employeeId: number;
  employeeName: string;
  month: string;
  baseSalary: number;
  overtime: number;
  allowances: number;
  deductions: number;
  totalSalary: number;
  status: 'Paid' | 'Pending' | 'Processing';
}

export const mockPayroll: Payroll[] = [
  {
    id: 1,
    employeeId: 1,
    employeeName: 'Nguyen Van A',
    month: '2025-01',
    baseSalary: 15000000,
    overtime: 500000,
    allowances: 1000000,
    deductions: 1500000,
    totalSalary: 15000000,
    status: 'Paid',
  },
  {
    id: 2,
    employeeId: 2,
    employeeName: 'Tran Thi B',
    month: '2025-01',
    baseSalary: 25000000,
    overtime: 1200000,
    allowances: 2000000,
    deductions: 2500000,
    totalSalary: 25700000,
    status: 'Processing',
  },
  {
    id: 3,
    employeeId: 3,
    employeeName: 'Le Van C',
    month: '2025-01',
    baseSalary: 20000000,
    overtime: 800000,
    allowances: 1500000,
    deductions: 2000000,
    totalSalary: 20300000,
    status: 'Pending',
  },
];

// Leave Request Mock Data
export interface LeaveRequest {
  id: number;
  employeeId: number;
  employeeName: string;
  leaveType: 'Annual' | 'Sick' | 'Personal' | 'Maternity' | 'Emergency';
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedDate: string;
}

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: 1,
    employeeId: 1,
    employeeName: 'Nguyen Van A',
    leaveType: 'Annual',
    startDate: '2025-02-10',
    endDate: '2025-02-14',
    days: 5,
    reason: 'Family vacation',
    status: 'Approved',
    appliedDate: '2025-01-20',
  },
  {
    id: 2,
    employeeId: 2,
    employeeName: 'Tran Thi B',
    leaveType: 'Sick',
    startDate: '2025-01-28',
    endDate: '2025-01-29',
    days: 2,
    reason: 'Medical checkup',
    status: 'Pending',
    appliedDate: '2025-01-26',
  },
  {
    id: 3,
    employeeId: 3,
    employeeName: 'Le Van C',
    leaveType: 'Personal',
    startDate: '2025-03-01',
    endDate: '2025-03-01',
    days: 1,
    reason: 'Personal matter',
    status: 'Rejected',
    appliedDate: '2025-01-25',
  },
];
