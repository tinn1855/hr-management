import { Input } from '@/components/ui/input';

interface FormSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
  placeholder?: string;
}

export function FormSearch({
  value,
  onChange,
  onSubmit,
  placeholder,
}: FormSearchProps) {
  return (
    <form method="POST" className="w-1/2">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          name="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}
