import { MoleculeSearchBar } from '@/components/molecules/search-bar';
import { MoleculeFilterGroup } from '@/components/molecules/filter-group';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MoleculePageHeaderProps {
  title: string;
  description?: string;
  searchProps?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  filterProps?: {
    filters: Array<{
      key: string;
      label: string;
      value: string;
      options: Array<{ value: string; label: string }>;
      onChange: (value: string) => void;
    }>;
    onClearAll?: () => void;
    hasActiveFilters?: boolean;
  };
  actionProps?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  className?: string;
}

export function MoleculePageHeader({
  title,
  description,
  searchProps,
  filterProps,
  actionProps,
  className,
}: MoleculePageHeaderProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Title Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        {actionProps && (
          <Button onClick={actionProps.onClick}>
            {actionProps.icon || <Plus className="h-4 w-4 mr-2" />}
            {actionProps.label}
          </Button>
        )}
      </div>

      {/* Controls Section */}
      {(searchProps || filterProps) && (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
          {searchProps && (
            <div className="flex-1 min-w-0">
              <MoleculeSearchBar
                value={searchProps.value}
                onChange={searchProps.onChange}
                placeholder={searchProps.placeholder}
              />
            </div>
          )}
          {filterProps && (
            <MoleculeFilterGroup
              filters={filterProps.filters}
              onClearAll={filterProps.onClearAll}
              hasActiveFilters={filterProps.hasActiveFilters}
            />
          )}
        </div>
      )}
    </div>
  );
}

MoleculePageHeader.displayName = 'MoleculePageHeader';
