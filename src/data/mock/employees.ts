// Employee Mock Data
export interface Employee extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  status: 'Active' | 'Inactive';
  salary: number;
  hireDate: string;
  avatar?: string;
}

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: 'Nguyen Van A',
    email: 'nguyenvana@company.com',
    department: 'Human Resources',
    position: 'HR Specialist',
    status: 'Active',
    salary: 15000000,
    hireDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Tran Thi B',
    email: 'tranthib@company.com',
    department: 'Engineering',
    position: 'Software Developer',
    status: 'Active',
    salary: 25000000,
    hireDate: '2022-03-20',
  },
  {
    id: 3,
    name: 'Le Van C',
    email: 'levanc@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    status: 'Active',
    salary: 20000000,
    hireDate: '2023-05-10',
  },
  {
    id: 4,
    name: 'Pham Thi D',
    email: 'phamthid@company.com',
    department: 'Finance',
    position: 'Accountant',
    status: 'Inactive',
    salary: 18000000,
    hireDate: '2023-02-28',
  },
  {
    id: 5,
    name: 'Hoang Van E',
    email: 'hoangvane@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    status: 'Active',
    salary: 35000000,
    hireDate: '2021-08-15',
  },
  {
    id: 6,
    name: 'Vo Thi F',
    email: 'vothif@company.com',
    department: 'Sales',
    position: 'Sales Manager',
    status: 'Active',
    salary: 22000000,
    hireDate: '2022-11-05',
  },
  {
    id: 7,
    name: 'Dang Van G',
    email: 'dangvang@company.com',
    department: 'Engineering',
    position: 'DevOps Engineer',
    status: 'Active',
    salary: 28000000,
    hireDate: '2023-06-01',
  },
  {
    id: 8,
    name: 'Bui Thi H',
    email: 'buithih@company.com',
    department: 'Human Resources',
    position: 'HR Manager',
    status: 'Active',
    salary: 30000000,
    hireDate: '2021-12-10',
  },
];

// Utility functions
export const getUniqueDepartments = (employees: Employee[]): string[] => {
  return [...new Set(employees.map((emp) => emp.department))];
};

export const getUniquePositions = (employees: Employee[]): string[] => {
  return [...new Set(employees.map((emp) => emp.position))];
};

export const getEmployeeStats = (employees: Employee[]) => {
  const total = employees.length;
  const active = employees.filter((emp) => emp.status === 'Active').length;
  const inactive = total - active;
  const avgSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / total;

  return {
    total,
    active,
    inactive,
    avgSalary: Math.round(avgSalary),
  };
};
