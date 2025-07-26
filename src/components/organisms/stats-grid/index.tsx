import { MoleculeStatCard } from '@/components/molecules/stat-card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface OrganismStatsGridItem {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export interface OrganismStatsGridProps {
  stats: OrganismStatsGridItem[];
  columns?: number;
  className?: string;
}

export function OrganismStatsGrid({
  stats,
  columns = 4,
  className,
}: OrganismStatsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  return (
    <div
      className={cn(
        'grid gap-6',
        gridCols[columns as keyof typeof gridCols] || gridCols[4],
        className
      )}
    >
      {stats.map((stat, index) => (
        <MoleculeStatCard
          key={index}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
}

OrganismStatsGrid.displayName = 'OrganismStatsGrid';
