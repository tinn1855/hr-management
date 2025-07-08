import { Paginations } from '@/components/features/pagination';
import { FormSearch } from '@/components/molecules/form-search';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Plus, Trash2 } from 'lucide-react';
import { mockEmployees } from '@/data/mockEmployees';
import { FilterSelect } from '@/components/features/filter-select';
import { useState } from 'react';

export function Employees() {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log();
  };

  return (
    <section>
      <div className="flex justify-end w-full gap-2">
        <FormSearch
          value={searchTerm}
          onChange={setSearchTerm}
          onSubmit={handleSearch}
        />
        <div className="w-32">
          <FilterSelect value={filter} onChange={setFilter} />
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
          {mockEmployees.map((employee) => (
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
