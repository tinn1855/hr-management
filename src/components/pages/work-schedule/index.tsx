import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Calendar, Clock, User } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const shifts = [
  {
    id: 1,
    employee: 'Nguyễn Văn A',
    department: 'IT',
    shift: 'Ca sáng',
    time: '08:00 - 17:00',
    date: '2025-07-24',
    status: 'Đã xếp ca',
  },
  {
    id: 2,
    employee: 'Trần Thị B',
    department: 'Marketing',
    shift: 'Ca chiều',
    time: '13:00 - 22:00',
    date: '2025-07-24',
    status: 'Đã xếp ca',
  },
  {
    id: 3,
    employee: 'Lê Văn C',
    department: 'Sales',
    shift: 'Ca tối',
    time: '18:00 - 02:00',
    date: '2025-07-24',
    status: 'Chưa xếp ca',
  },
];

export function WorkSchedule() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Phân ca làm việc
          </h1>
          <p className="text-muted-foreground">
            Quản lý ca làm việc cho nhân viên
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Xem lịch tuần
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tạo ca mới
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng ca đã xếp
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +12% so với tuần trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ca chưa xếp</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Cần xếp ca gấp</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Nhân viên tham gia
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              Trên tổng 52 nhân viên
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Shift Schedule Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch ca làm việc hôm nay</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Ca làm việc</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Ngày</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shifts.map((shift) => (
                <TableRow key={shift.id}>
                  <TableCell className="font-medium">
                    {shift.employee}
                  </TableCell>
                  <TableCell>{shift.department}</TableCell>
                  <TableCell>{shift.shift}</TableCell>
                  <TableCell>{shift.time}</TableCell>
                  <TableCell>{shift.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        shift.status === 'Đã xếp ca' ? 'default' : 'secondary'
                      }
                    >
                      {shift.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Sửa
                      </Button>
                      <Button size="sm" variant="outline">
                        Xóa
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
