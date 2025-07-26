import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MoleculeSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
  placeholder?: string;
  className?: string;
  showButton?: boolean;
  loading?: boolean;
}

export function MoleculeSearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search...',
  className,
  showButton = false,
  loading = false,
}: MoleculeSearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex gap-2 items-end', className)}
    >
      <div className="flex-1 relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      </div>
      {showButton && (
        <Button type="submit" loading={loading}>
          <Search className="h-4 w-4" />
        </Button>
      )}
    </form>
  );
}

MoleculeSearchBar.displayName = 'MoleculeSearchBar';
