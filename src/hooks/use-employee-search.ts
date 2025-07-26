import { useState, useMemo } from 'react';
import { mockEmployees } from '@/data/mockEmployees';
import {
  searchAndFilterEmployees,
  getUniqueDepartments,
  getUniquePositions,
  getUniqueStatuses,
} from '@/lib/employee-search-utils';

export const useEmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  // Lấy danh sách unique values cho filter options
  const departments = useMemo(() => getUniqueDepartments(mockEmployees), []);
  const positions = useMemo(() => getUniquePositions(mockEmployees), []);
  const statuses = useMemo(() => getUniqueStatuses(mockEmployees), []);

  // Lọc employees dựa trên search term và filter
  const filteredEmployees = useMemo(() => {
    return searchAndFilterEmployees(
      mockEmployees,
      searchTerm,
      filterType,
      filterValue
    );
  }, [searchTerm, filterType, filterValue]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  // Handle filter change
  const handleFilterChange = (type: string, value: string) => {
    setFilterType(type);
    setFilterValue(value);
  };

  // Reset search và filter
  const resetSearch = () => {
    setSearchTerm('');
    setFilterType('');
    setFilterValue('');
  };

  // Clear search only
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Clear filter only
  const clearFilter = () => {
    setFilterType('');
    setFilterValue('');
  };

  return {
    // State
    searchTerm,
    filterType,
    filterValue,
    filteredEmployees,

    // Options for filter
    departments,
    positions,
    statuses,

    // Actions
    setSearchTerm,
    handleSearch,
    handleFilterChange,
    resetSearch,
    clearSearch,
    clearFilter,

    // Computed values
    totalEmployees: mockEmployees.length,
    filteredCount: filteredEmployees.length,
    hasActiveFilters: searchTerm.trim() !== '' || (filterType && filterValue),
  };
};
