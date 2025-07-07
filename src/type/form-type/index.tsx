type LoginFormData = {
  email: string;
  password: string;
};

type EmployeeFormData = {
  fullName: string;
  email: string;
  departmentId: string;
  position: string;
  status: 'active' | 'inactive';
};

type LeaveRequestFormData = {
  fromDate: string;
  toDate: string;
  reason: string;
};
