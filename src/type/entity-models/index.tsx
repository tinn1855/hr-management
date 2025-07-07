type Employee = {
  id: string;
  fullName: string;
  email: string;
  departmentId: string;
  position: string;
  status: 'active' | 'inactive';
};

type Department = {
  id: string;
  name: string;
};

type Attendance = {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
};

type LeaveRequest = {
  id: string;
  employeeId: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
};
