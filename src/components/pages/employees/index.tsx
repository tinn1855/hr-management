import { Paginations } from '@/components/features/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Plus, Trash2 } from 'lucide-react';

export function Employees() {
  const employees = [
    {
      id: 1,
      name: 'Nguyen Van A',
      email: 'nguyenvana@example.com',
      department: 'Human Resources',
      position: 'HR Specialist',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Le Thi B',
      email: 'lethib@example.com',
      department: 'Finance',
      position: 'Accountant',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Pham Minh C',
      email: 'phamminhc@example.com',
      department: 'Marketing',
      position: 'Marketing Manager',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Hoang Van D',
      email: 'hoangvand@example.com',
      department: 'IT',
      position: 'Senior Developer',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Tran Thi E',
      email: 'tranthie@example.com',
      department: 'Sales',
      position: 'Sales Representative',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Bui Van F',
      email: 'buivanf@example.com',
      department: 'Operations',
      position: 'Operations Manager',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Do Thi G',
      email: 'dothig@example.com',
      department: 'Customer Service',
      position: 'Customer Support Lead',
      status: 'Active',
    },
    {
      id: 8,
      name: 'Vo Minh H',
      email: 'vominhh@example.com',
      department: 'Research and Development',
      position: 'Research Scientist',
      status: 'Active',
    },
    {
      id: 9,
      name: 'Dinh Thi I',
      email: 'dinthii@example.com',
      department: 'Legal',
      position: 'Legal Counsel',
      status: 'Active',
    },
    {
      id: 10,
      name: 'Vu Van K',
      email: 'vuvank@example.com',
      department: 'Product Management',
      position: 'Product Manager',
      status: 'Active',
    },
  ];
  return (
    <section>
      <div className="flex justify-end w-full gap-2">
        <form method="POST" className="w-1/2">
          <div className="flex items-center gap-2">
            <Input type="text" name="name" placeholder="Search" />
          </div>
        </form>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">Department</SelectItem>
              <SelectItem value="system">Position</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button>
            <Plus />
          </Button>
        </div>
      </div>
      <Table className="my-5">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.status}</TableCell>
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
      <Paginations />
    </section>
  );
}
