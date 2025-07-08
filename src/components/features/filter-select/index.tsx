import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function FilterSelect({ value, onChange }: FilterSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Filter by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="department">Department</SelectItem>
        <SelectItem value="position">Position</SelectItem>
      </SelectContent>
    </Select>
  );
}
