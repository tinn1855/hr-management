import * as React from 'react';
import { OrganismStatsGrid } from '@/components/organisms/stats-grid';
import { MoleculeSearchBar } from '@/components/molecules/search-bar';
import { MoleculeFilterGroup } from '@/components/molecules/filter-group';
import { OrganismDataTable } from '@/components/organisms/data-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface SimpleDataManagementProps<T extends Record<string, unknown>> {
  pageTitle: string;
  pageDescription: string;
  stats: Array<{
    title: string;
    value: number | string;
    description: string;
    icon: LucideIcon;
    trend?: { value: number; isPositive: boolean };
  }>;
  searchProps: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  };
  filterProps: {
    filters: Array<{
      key: string;
      label: string;
      value: string;
      options: Array<{ value: string; label: string }>;
      onChange: (value: string) => void;
    }>;
    onClearAll: () => void;
    hasActiveFilters: boolean;
  };
  actionProps: {
    label: string;
    onClick: () => void;
  };
  tableProps: {
    data: T[];
    columns: Array<{
      key: keyof T;
      header: string;
      className?: string;
    }>;
    actions: Array<{
      label: string;
      icon: React.ReactNode;
      onClick: (item: T) => void;
      variant?: 'default' | 'destructive';
    }>;
    emptyMessage: string;
  };
  resultsSummary: {
    total: number;
    filtered: number;
    searchTerm?: string;
    activeFilters?: string[];
  };
}

export function SimpleDataManagement<T extends Record<string, unknown>>({
  pageTitle,
  pageDescription,
  stats,
  searchProps,
  filterProps,
  actionProps,
  tableProps,
  resultsSummary,
}: SimpleDataManagementProps<T>) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{pageTitle}</h1>
          <p className="text-muted-foreground mt-2">{pageDescription}</p>
        </div>
        <Button onClick={actionProps.onClick} className="gap-2">
          <Plus className="h-4 w-4" />
          {actionProps.label}
        </Button>
      </div>

      {/* Stats Grid */}
      <OrganismStatsGrid stats={stats} />

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <MoleculeSearchBar
          value={searchProps.value}
          onChange={searchProps.onChange}
          placeholder={searchProps.placeholder}
          className="w-full sm:max-w-sm"
        />

        <MoleculeFilterGroup
          filters={filterProps.filters}
          onClearAll={filterProps.onClearAll}
          hasActiveFilters={filterProps.hasActiveFilters}
        />
      </div>

      {/* Results Summary */}
      {(resultsSummary.searchTerm || resultsSummary.activeFilters?.length) && (
        <div className="text-sm text-muted-foreground">
          Showing {resultsSummary.filtered} of {resultsSummary.total} results
          {resultsSummary.searchTerm && (
            <span> for "{resultsSummary.searchTerm}"</span>
          )}
          {resultsSummary.activeFilters?.length && (
            <span> filtered by {resultsSummary.activeFilters.join(', ')}</span>
          )}
        </div>
      )}

      {/* Data Table */}
      <OrganismDataTable
        data={tableProps.data}
        columns={tableProps.columns}
        actions={tableProps.actions}
        emptyMessage={tableProps.emptyMessage}
      />
    </div>
  );
}
