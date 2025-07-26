import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockEmployees } from '@/data/mockEmployees';
import {
  searchEmployees,
  filterEmployeesByDepartment,
  filterEmployeesByPosition,
  searchAndFilterEmployees,
  getUniqueDepartments,
  getUniquePositions,
} from '@/lib/employee-search-utils';

export const SearchFilterDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterPosition, setFilterPosition] = useState('');
  const [demoResults, setDemoResults] = useState<any[]>([]);

  const departments = getUniqueDepartments(mockEmployees);
  const positions = getUniquePositions(mockEmployees);

  // Demo search function
  const handleSearchDemo = () => {
    const results = searchEmployees(mockEmployees, searchTerm);
    setDemoResults(results);
  };

  // Demo filter by department
  const handleFilterDepartmentDemo = () => {
    const results = filterEmployeesByDepartment(
      mockEmployees,
      filterDepartment
    );
    setDemoResults(results);
  };

  // Demo filter by position
  const handleFilterPositionDemo = () => {
    const results = filterEmployeesByPosition(mockEmployees, filterPosition);
    setDemoResults(results);
  };

  // Demo combined search and filter
  const handleCombinedDemo = () => {
    const results = searchAndFilterEmployees(
      mockEmployees,
      searchTerm,
      'department',
      filterDepartment
    );
    setDemoResults(results);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Search & Filter Functions Demo</h2>

      {/* Search Demo */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Search Function Demo</h3>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Search by name, email, or position"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearchDemo}>Search</Button>
        </div>
        <div className="text-sm text-gray-600">
          Function: searchEmployees(mockEmployees, searchTerm)
        </div>
      </div>

      {/* Filter Demo */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Filter Function Demo</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Filter by Department:
            </label>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <Button onClick={handleFilterDepartmentDemo} className="mt-2">
              Filter by Department
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Filter by Position:
            </label>
            <select
              value={filterPosition}
              onChange={(e) => setFilterPosition(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Positions</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
            <Button onClick={handleFilterPositionDemo} className="mt-2">
              Filter by Position
            </Button>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Functions: filterEmployeesByDepartment(), filterEmployeesByPosition()
        </div>
      </div>

      {/* Combined Demo */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">
          Combined Search & Filter Demo
        </h3>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <Button onClick={handleCombinedDemo}>Search & Filter</Button>
        </div>
        <div className="text-sm text-gray-600">
          Function: searchAndFilterEmployees(mockEmployees, searchTerm,
          'department', filterDepartment)
        </div>
      </div>

      {/* Results */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">
          Results ({demoResults.length} employees)
        </h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {demoResults.map((employee) => (
            <div
              key={employee.id}
              className="flex gap-4 text-sm p-2 bg-gray-50 rounded"
            >
              <span className="font-medium">{employee.id}.</span>
              <span>{employee.name}</span>
              <span className="text-gray-500">({employee.department})</span>
              <span className="text-gray-500">{employee.position}</span>
            </div>
          ))}
          {demoResults.length === 0 && (
            <div className="text-gray-500 text-center py-4">
              No results to display. Try searching or filtering.
            </div>
          )}
        </div>
      </div>

      {/* Code Examples */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="text-lg font-semibold mb-2">Code Examples:</h3>
        <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto">
          {`// Search employees
const searchResults = searchEmployees(employees, 'Nguyen');

// Filter by department
const itEmployees = filterEmployeesByDepartment(employees, 'IT');

// Filter by position
const managers = filterEmployeesByPosition(employees, 'Manager');

// Combined search and filter
const results = searchAndFilterEmployees(
  employees, 
  'Nguyen', 
  'department', 
  'IT'
);

// Get unique values
const departments = getUniqueDepartments(employees);
const positions = getUniquePositions(employees);`}
        </pre>
      </div>
    </div>
  );
};
