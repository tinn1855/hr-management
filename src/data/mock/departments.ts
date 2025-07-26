// Department Mock Data
export interface Department {
  id: number;
  name: string;
  description: string;
  manager: string;
  employeeCount: number;
  status: 'Active' | 'Inactive';
  createdDate: string;
  lastUpdated: string;
}

export const mockDepartments: Department[] = [
  {
    id: 1,
    name: 'Human Resources',
    description: 'Manages employee relations, hiring, and company policies',
    manager: 'Bui Thi H',
    employeeCount: 2,
    status: 'Active',
    createdDate: '2021-01-01',
    lastUpdated: '2024-12-01',
  },
  {
    id: 2,
    name: 'Engineering',
    description: 'Software development and technical operations',
    manager: 'Hoang Van E',
    employeeCount: 3,
    status: 'Active',
    createdDate: '2021-01-01',
    lastUpdated: '2024-11-15',
  },
  {
    id: 3,
    name: 'Marketing',
    description: 'Brand management, advertising, and customer outreach',
    manager: 'Le Van C',
    employeeCount: 1,
    status: 'Active',
    createdDate: '2021-06-01',
    lastUpdated: '2024-10-20',
  },
  {
    id: 4,
    name: 'Finance',
    description: 'Financial planning, accounting, and budget management',
    manager: 'Pham Thi D',
    employeeCount: 1,
    status: 'Active',
    createdDate: '2021-03-15',
    lastUpdated: '2024-09-30',
  },
  {
    id: 5,
    name: 'Sales',
    description: 'Customer acquisition and revenue generation',
    manager: 'Vo Thi F',
    employeeCount: 1,
    status: 'Active',
    createdDate: '2022-01-01',
    lastUpdated: '2024-12-10',
  },
];

export const getDepartmentStats = (departments: Department[]) => {
  const total = departments.length;
  const active = departments.filter((dept) => dept.status === 'Active').length;
  const inactive = total - active;
  const totalEmployees = departments.reduce(
    (sum, dept) => sum + dept.employeeCount,
    0
  );

  return {
    total,
    active,
    inactive,
    totalEmployees,
  };
};
