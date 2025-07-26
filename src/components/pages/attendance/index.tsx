import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Download,
  CheckCircle,
  XCircle,
  AlertCircle,
  Timer,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const attendanceData = [
  {
    id: 1,
    employeeName: 'Nguyễn Văn A',
    department: 'IT',
    checkIn: '08:00',
    checkOut: '17:30',
    workHours: '9.5',
    overtime: '1.5',
    status: 'On time',
    location: 'Văn phòng chính',
    date: '2025-07-24',
  },
  {
    id: 2,
    employeeName: 'Trần Thị B',
    department: 'Marketing',
    checkIn: '08:15',
    checkOut: '17:45',
    workHours: '9.5',
    overtime: '1.5',
    status: 'Late',
    location: 'Văn phòng chính',
    date: '2025-07-24',
  },
  {
    id: 3,
    employeeName: 'Lê Văn C',
    department: 'Sales',
    checkIn: '07:45',
    checkOut: '17:15',
    workHours: '9.5',
    overtime: '0',
    status: 'Early',
    location: 'Chi nhánh HCM',
    date: '2025-07-24',
  },
  {
    id: 4,
    employeeName: 'Phạm Thị D',
    department: 'HR',
    checkIn: '08:05',
    checkOut: '19:00',
    workHours: '10.9',
    overtime: '2.9',
    status: 'On time',
    location: 'Văn phòng chính',
    date: '2025-07-24',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'On time':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'Late':
      return <XCircle className="h-4 w-4 text-red-500" />;
    case 'Early':
      return <CheckCircle className="h-4 w-4 text-blue-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'On time':
      return 'default';
    case 'Late':
      return 'destructive';
    case 'Early':
      return 'secondary';
    default:
      return 'outline';
  }
};

export function Attendance() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Chấm công</h1>
          <p className="text-muted-foreground">
            Quản lý thời gian làm việc của nhân viên
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Xem theo tháng
          </Button>
        </div>
      </div>

      {/* Quick Check-in Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                Chấm công nhanh
              </h3>
              <p className="text-blue-700">
                Thời gian hiện tại: {new Date().toLocaleString('vi-VN')}
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-green-600 hover:bg-green-700">
                <Clock className="mr-2 h-4 w-4" />
                Check In
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                <Clock className="mr-2 h-4 w-4" />
                Check Out
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Đã check-in hôm nay
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">148</div>
            <p className="text-xs text-muted-foreground">/ 152 nhân viên</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đi muộn</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">-50% so với hôm qua</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tăng ca hôm nay
            </CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Tổng 18.5 giờ</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Giờ làm trung bình
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5h</div>
            <p className="text-xs text-muted-foreground">
              +5% so với tuần trước
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Bảng chấm công hôm nay - {new Date().toLocaleDateString('vi-VN')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Giờ làm</TableHead>
                <TableHead>Tăng ca</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Vị trí</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">
                    {record.employeeName}
                  </TableCell>
                  <TableCell>{record.department}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    {record.checkIn}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      {record.checkOut}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{record.workHours}h</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        record.overtime === '0' ? 'secondary' : 'default'
                      }
                    >
                      {record.overtime}h
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(record.status)}
                      <Badge variant={getStatusColor(record.status) as any}>
                        {record.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{record.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Sửa
                      </Button>
                      <Button size="sm" variant="outline">
                        Chi tiết
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
