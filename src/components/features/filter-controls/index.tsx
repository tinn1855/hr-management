import { Button } from '@/components/ui/button';
import { FilterSelect } from '@/components/features/filter-select';
import { X } from 'lucide-react';

interface FilterControlsProps {
  departments: string[];
  positions: string[];
  statuses: string[];
  filterType: string;
  filterValue: string;
  onFilterChange: (type: string, value: string) => void;
  onClearFilter: () => void;
}

export function FilterControls({
  departments,
  positions,
  statuses,
  filterType,
  filterValue,
  onFilterChange,
  onClearFilter,
}: FilterControlsProps) {
  const getFilterOptions = () => {
    switch (filterType) {
      case 'department':
        return departments;
      case 'position':
        return positions;
      case 'status':
        return statuses;
      default:
        return [];
    }
  };

  const getFilterPlaceholder = () => {
    switch (filterType) {
      case 'department':
        return 'Filter by department';
      case 'position':
        return 'Filter by position';
      case 'status':
        return 'Filter by status';
      default:
        return 'Select filter type';
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Filter Type Selector */}
      <div className="w-32">
        <FilterSelect
          value={filterType}
          onChange={(value) => {
            onFilterChange(value, '');
          }}
          filterType="filter type"
          options={['department', 'position', 'status']}
          placeholder="Filter by"
        />
      </div>

      {/* Filter Value Selector */}
      {filterType && (
        <div className="w-40">
          <FilterSelect
            value={filterValue}
            onChange={(value) => onFilterChange(filterType, value)}
            filterType={filterType}
            options={getFilterOptions()}
            placeholder={getFilterPlaceholder()}
          />
        </div>
      )}

      {/* Clear Filter Button */}
      {filterValue && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilter}
          className="h-9 px-2"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
