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
import { mockDepartment } from '@/data/mockDepartment';
import { Badge } from '@/components/ui/badge';
import { Paginations } from '@/components/features/pagination';
import { FormSearch } from '@/components/molecules/form-search';
import { useState } from 'react';
import { FilterSelect } from '@/components/features/filter-select';

export function Department() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('all');

  return (
    <section>
      <div className="flex justify-end gap-2 ">
        <FormSearch
          value={searchTerm}
          onChange={setSearchTerm}
          onSubmit={(e) => {
            console.log('text');
          }}
        />
        <div>
          <FilterSelect
            value={filterValue}
            onChange={setFilterValue}
            filterType="status"
            options={['Active', 'Inactive']}
            placeholder="Filter by status"
          />
        </div>
        <Button>Add</Button>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Tên phòng ban</TableHead>
            <TableHead>Số lượng</TableHead>
            <TableHead>Ngày tạo</TableHead>
            <TableHead>Cập nhật lần cuối</TableHead>
            <TableHead>Quản lý</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockDepartment.map((department) => (
            <TableRow key={department.id}>
              <TableCell>{department.id}</TableCell>
              <TableCell>{department.name}</TableCell>
              <TableCell>{department.employee_count}</TableCell>
              <TableCell>
                {new Date(department.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(department.updated_at).toLocaleDateString()}
              </TableCell>
              <TableCell>{department.manager_id}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    department.status === 'Inactive' ? 'destructive' : 'default'
                  }
                >
                  {department.status}
                </Badge>
              </TableCell>
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
