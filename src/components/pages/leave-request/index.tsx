import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  FileText,
  Plus,
  Check,
  X,
  AlertCircle,
  Users,
  TrendingUp,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const leaveRequests = [
  {
    id: 1,
    employeeName: 'Nguyễn Văn A',
    department: 'IT',
    leaveType: 'Nghỉ phép năm',
    startDate: '2025-07-28',
    endDate: '2025-07-30',
    days: 3,
    reason: 'Nghỉ phép hè cùng gia đình',
    status: 'Chờ duyệt',
    submittedDate: '2025-07-20',
    approver: 'HR Manager',
  },
  {
    id: 2,
    employeeName: 'Trần Thị B',
    department: 'Marketing',
    leaveType: 'Nghỉ ốm',
    startDate: '2025-07-25',
    endDate: '2025-07-25',
    days: 1,
    reason: 'Bị cảm sốt, cần nghỉ ngơi',
    status: 'Đã duyệt',
    submittedDate: '2025-07-24',
    approver: 'HR Manager',
  },
  {
    id: 3,
    employeeName: 'Lê Văn C',
    department: 'Sales',
    leaveType: 'Nghỉ có việc riêng',
    startDate: '2025-08-01',
    endDate: '2025-08-02',
    days: 2,
    reason: 'Đi làm thủ tục pháp lý',
    status: 'Từ chối',
    submittedDate: '2025-07-22',
    approver: 'Department Manager',
  },
  {
    id: 4,
    employeeName: 'Phạm Thị D',
    department: 'HR',
    leaveType: 'Nghỉ thai sản',
    startDate: '2025-08-15',
    endDate: '2025-11-15',
    days: 90,
    reason: 'Nghỉ thai sản theo quy định',
    status: 'Đã duyệt',
    submittedDate: '2025-07-15',
    approver: 'CEO',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Đã duyệt':
      return <Check className="h-4 w-4 text-green-500" />;
    case 'Từ chối':
      return <X className="h-4 w-4 text-red-500" />;
    case 'Chờ duyệt':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Đã duyệt':
      return 'default';
    case 'Từ chối':
      return 'destructive';
    case 'Chờ duyệt':
      return 'secondary';
    default:
      return 'outline';
  }
};

const getLeaveTypeColor = (type: string) => {
  switch (type) {
    case 'Nghỉ phép năm':
      return 'default';
    case 'Nghỉ ốm':
      return 'destructive';
    case 'Nghỉ có việc riêng':
      return 'secondary';
    case 'Nghỉ thai sản':
      return 'outline';
    default:
      return 'secondary';
  }
};

export function LeaveRequest() {
  const totalRequests = leaveRequests.length;
  const pendingRequests = leaveRequests.filter(
    (req) => req.status === 'Chờ duyệt'
  ).length;
  const approvedRequests = leaveRequests.filter(
    (req) => req.status === 'Đã duyệt'
  ).length;
  const totalDaysRequested = leaveRequests.reduce(
    (sum, req) => sum + req.days,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Nghỉ phép & Xin phép
          </h1>
          <p className="text-muted-foreground">
            Quản lý đơn xin nghỉ phép của nhân viên
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tạo đơn nghỉ phép
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng đơn xin nghỉ
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRequests}</div>
            <p className="text-xs text-muted-foreground">Trong tháng này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chờ phê duyệt</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingRequests}</div>
            <p className="text-xs text-muted-foreground">Cần xử lý ngay</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đã phê duyệt</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedRequests}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((approvedRequests / totalRequests) * 100)}% tổng đơn
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng ngày nghỉ
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDaysRequested}</div>
            <p className="text-xs text-muted-foreground">Ngày đã đăng ký</p>
          </CardContent>
        </Card>
      </div>

      {/* Leave Balance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Thống kê nghỉ phép theo loại</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-muted-foreground">Nghỉ phép năm</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-red-600">3</div>
              <div className="text-sm text-muted-foreground">Nghỉ ốm</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">5</div>
              <div className="text-sm text-muted-foreground">
                Nghỉ có việc riêng
              </div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <div className="text-sm text-muted-foreground">Nghỉ thai sản</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leave Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách đơn xin nghỉ phép</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Loại nghỉ phép</TableHead>
                <TableHead>Ngày bắt đầu</TableHead>
                <TableHead>Ngày kết thúc</TableHead>
                <TableHead>Số ngày</TableHead>
                <TableHead>Lý do</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Người duyệt</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">
                    {request.employeeName}
                  </TableCell>
                  <TableCell>{request.department}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getLeaveTypeColor(request.leaveType) as any}
                    >
                      {request.leaveType}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.startDate}</TableCell>
                  <TableCell>{request.endDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{request.days} ngày</Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {request.reason}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(request.status)}
                      <Badge variant={getStatusColor(request.status) as any}>
                        {request.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>{request.approver}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {request.status === 'Chờ duyệt' && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600"
                          >
                            <Check className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </>
                      )}
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
