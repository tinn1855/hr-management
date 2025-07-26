import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export interface OrganismDataTableColumn<T> {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: unknown, item: T) => React.ReactNode;
}

export interface OrganismDataTableAction<T> {
  label: string;
  icon?: React.ReactNode;
  onClick: (item: T) => void;
  variant?: 'default' | 'destructive';
}

export interface OrganismDataTableProps<T> {
  data: T[];
  columns: OrganismDataTableColumn<T>[];
  actions?: OrganismDataTableAction<T>[];
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

export function OrganismDataTable<T extends Record<string, unknown>>({
  data,
  columns,
  actions,
  loading,
  emptyMessage = 'No data available',
  className,
}: OrganismDataTableProps<T>) {
  const renderCellValue = (
    column: OrganismDataTableColumn<T>,
    item: T
  ): React.ReactNode => {
    const value = item[column.key];

    if (column.render) {
      return column.render(value, item);
    }

    // Auto-render badges for status-like fields
    if (
      typeof value === 'string' &&
      (column.key.toString().toLowerCase().includes('status') ||
        column.key.toString().toLowerCase().includes('state'))
    ) {
      const status = value.toLowerCase() as 'active' | 'inactive' | 'pending';
      return <Badge status={status}>{value}</Badge>;
    }

    return String(value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className={cn('border rounded-lg', className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key.toString()}
                className={column.className}
              >
                {column.header}
              </TableHead>
            ))}
            {actions && actions.length > 0 && (
              <TableHead className="text-right">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell
                    key={column.key.toString()}
                    className={column.className}
                  >
                    {renderCellValue(column, item)}
                  </TableCell>
                ))}
                {actions && actions.length > 0 && (
                  <TableCell className="text-right">
                    {actions.length === 1 ? (
                      <Button
                        variant={
                          actions[0].variant === 'destructive'
                            ? 'destructive'
                            : 'outline'
                        }
                        size="sm"
                        onClick={() => actions[0].onClick(item)}
                      >
                        {actions[0].icon || <Edit className="h-4 w-4" />}
                      </Button>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {actions.map((action, actionIndex) => (
                            <DropdownMenuItem
                              key={actionIndex}
                              onClick={() => action.onClick(item)}
                              className={cn(
                                action.variant === 'destructive' &&
                                  'text-destructive'
                              )}
                            >
                              {action.icon}
                              {action.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length + (actions ? 1 : 0)}
                className="text-center py-8 text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

OrganismDataTable.displayName = 'OrganismDataTable';
