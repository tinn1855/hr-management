import { useState, useMemo } from 'react';
import { SimpleDataManagement } from '@/components/templates';
import { Edit, Trash2, Users, UserCheck, UserX } from 'lucide-react';
import {
  mockEmployees,
  getUniqueDepartments,
  getEmployeeStats,
  type Employee,
} from '@/data/mock';

export function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Get unique departments for filter
  const departments = useMemo(() => getUniqueDepartments(mockEmployees), []);

  // Filter employees based on search and department
  const filteredEmployees = useMemo(() => {
    return mockEmployees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        filterDepartment === 'all' || employee.department === filterDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, filterDepartment]);

  // Calculate stats
  const stats = useMemo(() => {
    const employeeStats = getEmployeeStats(mockEmployees);

    return [
      {
        title: 'Total Employees',
        value: employeeStats.total,
        description: 'All registered employees',
        icon: Users,
        trend: { value: 12, isPositive: true },
      },
      {
        title: 'Active Employees',
        value: employeeStats.active,
        description: 'Currently working',
        icon: UserCheck,
        trend: { value: 8, isPositive: true },
      },
      {
        title: 'Inactive Employees',
        value: employeeStats.inactive,
        description: 'Not currently active',
        icon: UserX,
        trend: { value: -2, isPositive: false },
      },
    ];
  }, []);

  const handleEditEmployee = (employee: Employee) => {
    console.log('Edit employee:', employee);
    // TODO: Implement edit functionality
  };

  const handleDeleteEmployee = (employee: Employee) => {
    console.log('Delete employee:', employee);
    // TODO: Implement delete functionality
  };

  const handleAddEmployee = () => {
    console.log('Add new employee');
    // TODO: Implement add functionality
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilterDepartment('all');
  };

  return (
    <SimpleDataManagement<Employee>
      pageTitle="Employee Management"
      pageDescription="Manage your organization's employees, departments, and roles"
      stats={stats}
      searchProps={{
        value: searchTerm,
        onChange: setSearchTerm,
        placeholder: 'Search by name, email, or position...',
      }}
      filterProps={{
        filters: [
          {
            key: 'department',
            label: 'Department',
            value: filterDepartment,
            options: [
              { value: 'all', label: 'All Departments' },
              ...departments.map((dept) => ({ value: dept, label: dept })),
            ],
            onChange: setFilterDepartment,
          },
        ],
        onClearAll: clearFilters,
        hasActiveFilters: searchTerm !== '' || filterDepartment !== 'all',
      }}
      actionProps={{
        label: 'Add Employee',
        onClick: handleAddEmployee,
      }}
      tableProps={{
        data: filteredEmployees,
        columns: [
          { key: 'id', header: 'ID', className: 'w-16' },
          { key: 'name', header: 'Name', className: 'font-medium' },
          { key: 'email', header: 'Email' },
          { key: 'department', header: 'Department' },
          { key: 'position', header: 'Position' },
          { key: 'status', header: 'Status', className: 'w-24' },
        ],
        actions: [
          {
            label: 'Edit',
            icon: <Edit className="h-4 w-4" />,
            onClick: handleEditEmployee,
          },
          {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: handleDeleteEmployee,
            variant: 'destructive' as const,
          },
        ],
        emptyMessage: 'No employees found matching your criteria',
      }}
      resultsSummary={{
        total: mockEmployees.length,
        filtered: filteredEmployees.length,
        searchTerm: searchTerm || undefined,
        activeFilters:
          filterDepartment !== 'all' ? [filterDepartment] : undefined,
      }}
    />
  );
}

export { EmployeesPage as Employees };
