import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MoleculeFilterGroupProps {
  filters: Array<{
    key: string;
    label: string;
    value: string;
    options: Array<{ value: string; label: string }>;
    onChange: (value: string) => void;
  }>;
  onClearAll?: () => void;
  hasActiveFilters?: boolean;
  className?: string;
}

export function MoleculeFilterGroup({
  filters,
  onClearAll,
  hasActiveFilters,
  className,
}: MoleculeFilterGroupProps) {
  return (
    <div className={cn('flex gap-2 items-end', className)}>
      {filters.map((filter) => (
        <Select
          key={filter.key}
          value={filter.value}
          onValueChange={filter.onChange}
        >
          <SelectTrigger className="w-48">
            <SelectValue
              placeholder={`Filter by ${filter.label.toLowerCase()}`}
            />
          </SelectTrigger>
          <SelectContent>
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
      {hasActiveFilters && onClearAll && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearAll}
          className="flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          Clear All
        </Button>
      )}
    </div>
  );
}

MoleculeFilterGroup.displayName = 'MoleculeFilterGroup';
