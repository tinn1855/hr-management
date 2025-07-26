type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  status: string;
};

/**
 * Tìm kiếm employees theo tên hoặc email
 * @param employees - Mảng employees
 * @param searchTerm - Từ khóa tìm kiếm
 * @returns Mảng employees đã lọc
 */
export const searchEmployees = (
  employees: Employee[],
  searchTerm: string
): Employee[] => {
  if (!searchTerm.trim()) return employees;

  const lowerSearchTerm = searchTerm.toLowerCase();

  return employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(lowerSearchTerm) ||
      employee.email.toLowerCase().includes(lowerSearchTerm) ||
      employee.position.toLowerCase().includes(lowerSearchTerm)
  );
};

/**
 * Lọc employees theo department
 * @param employees - Mảng employees
 * @param department - Department cần lọc
 * @returns Mảng employees đã lọc
 */
export const filterEmployeesByDepartment = (
  employees: Employee[],
  department: string
): Employee[] => {
  if (!department || department === 'all') return employees;

  return employees.filter(
    (employee) => employee.department.toLowerCase() === department.toLowerCase()
  );
};

/**
 * Lọc employees theo position
 * @param employees - Mảng employees
 * @param position - Position cần lọc
 * @returns Mảng employees đã lọc
 */
export const filterEmployeesByPosition = (
  employees: Employee[],
  position: string
): Employee[] => {
  if (!position || position === 'all') return employees;

  return employees.filter(
    (employee) => employee.position.toLowerCase() === position.toLowerCase()
  );
};

/**
 * Lọc employees theo status
 * @param employees - Mảng employees
 * @param status - Status cần lọc
 * @returns Mảng employees đã lọc
 */
export const filterEmployeesByStatus = (
  employees: Employee[],
  status: string
): Employee[] => {
  if (!status || status === 'all') return employees;

  return employees.filter(
    (employee) => employee.status.toLowerCase() === status.toLowerCase()
  );
};

/**
 * Kết hợp search và filter
 * @param employees - Mảng employees
 * @param searchTerm - Từ khóa tìm kiếm
 * @param filterType - Loại filter (department, position, status)
 * @param filterValue - Giá trị filter
 * @returns Mảng employees đã lọc
 */
export const searchAndFilterEmployees = (
  employees: Employee[],
  searchTerm: string,
  filterType: string,
  filterValue: string
): Employee[] => {
  let filteredEmployees = employees;

  // Áp dụng search trước
  if (searchTerm.trim()) {
    filteredEmployees = searchEmployees(filteredEmployees, searchTerm);
  }

  // Sau đó áp dụng filter
  if (filterType && filterValue && filterValue !== 'all') {
    switch (filterType) {
      case 'department':
        filteredEmployees = filterEmployeesByDepartment(
          filteredEmployees,
          filterValue
        );
        break;
      case 'position':
        filteredEmployees = filterEmployeesByPosition(
          filteredEmployees,
          filterValue
        );
        break;
      case 'status':
        filteredEmployees = filterEmployeesByStatus(
          filteredEmployees,
          filterValue
        );
        break;
      default:
        break;
    }
  }

  return filteredEmployees;
};

/**
 * Lấy danh sách unique departments từ employees
 * @param employees - Mảng employees
 * @returns Mảng departments unique
 */
export const getUniqueDepartments = (employees: Employee[]): string[] => {
  const departments = employees.map((employee) => employee.department);
  return [...new Set(departments)].sort();
};

/**
 * Lấy danh sách unique positions từ employees
 * @param employees - Mảng employees
 * @returns Mảng positions unique
 */
export const getUniquePositions = (employees: Employee[]): string[] => {
  const positions = employees.map((employee) => employee.position);
  return [...new Set(positions)].sort();
};

/**
 * Lấy danh sách unique statuses từ employees
 * @param employees - Mảng employees
 * @returns Mảng statuses unique
 */
export const getUniqueStatuses = (employees: Employee[]): string[] => {
  const statuses = employees.map((employee) => employee.status);
  return [...new Set(statuses)].sort();
};
