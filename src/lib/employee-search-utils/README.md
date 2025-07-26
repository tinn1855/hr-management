# Employee Search & Filter Functions

## Overview

Bộ utility functions để tìm kiếm và lọc employees với các tính năng:

- Tìm kiếm theo tên, email, position
- Lọc theo department, position, status
- Kết hợp search và filter
- Lấy danh sách unique values

## Functions

### Search Functions

#### `searchEmployees(employees, searchTerm)`

Tìm kiếm employees theo tên, email hoặc position.

```typescript
const results = searchEmployees(mockEmployees, 'Nguyen');
// Trả về tất cả employees có tên, email hoặc position chứa 'Nguyen'
```

**Parameters:**

- `employees`: Array of Employee objects
- `searchTerm`: String to search for

**Returns:** Array of filtered Employee objects

### Filter Functions

#### `filterEmployeesByDepartment(employees, department)`

Lọc employees theo department.

```typescript
const itEmployees = filterEmployeesByDepartment(mockEmployees, 'IT');
// Trả về tất cả employees trong department IT
```

#### `filterEmployeesByPosition(employees, position)`

Lọc employees theo position.

```typescript
const managers = filterEmployeesByPosition(mockEmployees, 'Manager');
// Trả về tất cả employees có position Manager
```

#### `filterEmployeesByStatus(employees, status)`

Lọc employees theo status.

```typescript
const activeEmployees = filterEmployeesByStatus(mockEmployees, 'Active');
// Trả về tất cả employees có status Active
```

### Combined Functions

#### `searchAndFilterEmployees(employees, searchTerm, filterType, filterValue)`

Kết hợp search và filter.

```typescript
const results = searchAndFilterEmployees(
  mockEmployees,
  'Nguyen', // search term
  'department', // filter type
  'IT' // filter value
);
// Trả về employees có tên chứa 'Nguyen' VÀ thuộc department IT
```

**Parameters:**

- `employees`: Array of Employee objects
- `searchTerm`: String to search for
- `filterType`: 'department', 'position', or 'status'
- `filterValue`: Value to filter by

### Utility Functions

#### `getUniqueDepartments(employees)`

Lấy danh sách unique departments.

```typescript
const departments = getUniqueDepartments(mockEmployees);
// Returns: ['Finance', 'Human Resources', 'IT', 'Marketing', ...]
```

#### `getUniquePositions(employees)`

Lấy danh sách unique positions.

```typescript
const positions = getUniquePositions(mockEmployees);
// Returns: ['Accountant', 'HR Specialist', 'Manager', ...]
```

#### `getUniqueStatuses(employees)`

Lấy danh sách unique statuses.

```typescript
const statuses = getUniqueStatuses(mockEmployees);
// Returns: ['Active', 'Inactive']
```

## Usage Examples

### Basic Search

```typescript
import { searchEmployees } from '@/lib/employee-search-utils';

const searchResults = searchEmployees(mockEmployees, 'Nguyen');
console.log(`Found ${searchResults.length} employees with 'Nguyen'`);
```

### Filter by Department

```typescript
import { filterEmployeesByDepartment } from '@/lib/employee-search-utils';

const itEmployees = filterEmployeesByDepartment(mockEmployees, 'IT');
console.log(`Found ${itEmployees.length} IT employees`);
```

### Combined Search and Filter

```typescript
import { searchAndFilterEmployees } from '@/lib/employee-search-utils';

const results = searchAndFilterEmployees(
  mockEmployees,
  'Manager',
  'department',
  'Marketing'
);
console.log(`Found ${results.length} Marketing managers`);
```

### Get Filter Options

```typescript
import {
  getUniqueDepartments,
  getUniquePositions,
} from '@/lib/employee-search-utils';

const departments = getUniqueDepartments(mockEmployees);
const positions = getUniquePositions(mockEmployees);

// Use for dropdown options
```

## Custom Hook Usage

```typescript
import { useEmployeeSearch } from '@/hooks/use-employee-search';

function EmployeeList() {
  const {
    searchTerm,
    filteredEmployees,
    departments,
    setSearchTerm,
    handleFilterChange,
    resetSearch,
    totalEmployees,
    filteredCount,
  } = useEmployeeSearch();

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search employees..."
      />

      <select
        onChange={(e) => handleFilterChange('department', e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <p>
        Showing {filteredCount} of {totalEmployees} employees
      </p>

      {filteredEmployees.map((employee) => (
        <div key={employee.id}>{employee.name}</div>
      ))}
    </div>
  );
}
```

## Performance Notes

- Tất cả functions đều sử dụng case-insensitive search
- Search functions tìm kiếm trong name, email, và position
- Filter functions so sánh chính xác (exact match)
- Combined function áp dụng search trước, sau đó filter
- Utility functions sử dụng Set để loại bỏ duplicates

## Type Definitions

```typescript
type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  status: string;
};
```
