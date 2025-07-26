import { MoleculePageHeader } from '@/components/molecules/page-header';
import { OrganismDataTable } from '@/components/organisms/data-table';
import { OrganismStatsGrid } from '@/components/organisms/stats-grid';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface TemplateDataManagementProps<T> {
  pageTitle: string;
  pageDescription?: string;
  stats?: Array<{
    title: string;
    value: string | number;
    description?: string;
    icon?: LucideIcon;
    trend?: { value: number; isPositive: boolean };
  }>;
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
  tableProps: {
    data: T[];
    columns: Array<{
      key: keyof T;
      header: string;
      className?: string;
      render?: (value: unknown, item: T) => React.ReactNode;
    }>;
    actions?: Array<{
      label: string;
      icon?: React.ReactNode;
      onClick: (item: T) => void;
      variant?: 'default' | 'destructive';
    }>;
    loading?: boolean;
    emptyMessage?: string;
  };
  resultsSummary?: {
    total: number;
    filtered: number;
    searchTerm?: string;
    activeFilters?: string[];
  };
  className?: string;
}

export function TemplateDataManagement<T extends Record<string, unknown>>({
  pageTitle,
  pageDescription,
  stats,
  searchProps,
  filterProps,
  actionProps,
  tableProps,
  resultsSummary,
  className,
}: TemplateDataManagementProps<T>) {
  return (
    <div className={cn('space-y-8', className)}>
      {/* Stats Grid */}
      {stats && stats.length > 0 && <OrganismStatsGrid stats={stats} />}

      {/* Page Header with Search and Filters */}
      <MoleculePageHeader
        title={pageTitle}
        description={pageDescription}
        searchProps={searchProps}
        filterProps={filterProps}
        actionProps={actionProps}
      />

      {/* Results Summary */}
      {resultsSummary && (
        <div className="text-sm text-muted-foreground">
          {resultsSummary.filtered !== resultsSummary.total ? (
            <span>
              Showing {resultsSummary.filtered} of {resultsSummary.total} items
              {resultsSummary.searchTerm &&
                ` matching "${resultsSummary.searchTerm}"`}
              {resultsSummary.activeFilters &&
                resultsSummary.activeFilters.length > 0 &&
                ` with filters: ${resultsSummary.activeFilters.join(', ')}`}
            </span>
          ) : (
            <span>Showing all {resultsSummary.total} items</span>
          )}
        </div>
      )}

      {/* Data Table */}
      <OrganismDataTable
        data={tableProps.data}
        columns={tableProps.columns}
        actions={tableProps.actions}
        loading={tableProps.loading}
        emptyMessage={tableProps.emptyMessage}
      />
    </div>
  );
}

TemplateDataManagement.displayName = 'TemplateDataManagement';
