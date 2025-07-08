import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2 } from 'lucide-react';

export function Department() {
  const Departments = [
    {
      id: '1',
      name: 'IT',
      status: 'Active',
    },
    {
      id: '2',
      name: 'HR',
      status: 'Active',
    },
    {
      id: '3',
      name: 'Marketing',
      status: 'Active',
    },
    {
      id: '4',
      name: 'Designer',
      status: 'Active',
    },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Tên phòng ban</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Departments.map((department) => (
          <TableRow key={department.id}>
            <TableCell>{department.id}</TableCell>
            <TableCell>{department.name}</TableCell>
            <TableCell>{department.status}</TableCell>
            <TableCell className="flex items-center gap-2 justify-end">
              <Button variant="outline">
                <Edit />
              </Button>
              <Button variant="destructive">
                <Trash2 />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
