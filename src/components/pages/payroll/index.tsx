import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DollarSign,
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Clock,
  Calendar,
  Download,
  Plus,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const payrollData = [
  {
    id: 1,
    employeeName: 'Nguyễn Văn A',
    department: 'IT',
    position: 'Senior Developer',
    baseSalary: 25000000,
    workHours: 176,
    overtimeHours: 12,
    allowances: 2000000,
    deductions: 500000,
    totalSalary: 29500000,
    status: 'Đã tính',
  },
  {
    id: 2,
    employeeName: 'Trần Thị B',
    department: 'Marketing',
    position: 'Marketing Manager',
    baseSalary: 20000000,
    workHours: 168,
    overtimeHours: 8,
    allowances: 1500000,
    deductions: 400000,
    totalSalary: 23100000,
    status: 'Đã tính',
  },
  {
    id: 3,
    employeeName: 'Lê Văn C',
    department: 'Sales',
    position: 'Sales Executive',
    baseSalary: 15000000,
    workHours: 172,
    overtimeHours: 15,
    allowances: 3000000,
    deductions: 300000,
    totalSalary: 20200000,
    status: 'Chưa tính',
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export function Payroll() {
  const totalPayroll = payrollData.reduce(
    (sum, emp) => sum + emp.totalSalary,
    0
  );
  const averageSalary = totalPayroll / payrollData.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quản lý lương</h1>
          <p className="text-muted-foreground">
            Tính toán và quản lý lương nhân viên
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Xuất bảng lương
          </Button>
          <Button variant="outline">
            <Calculator className="mr-2 h-4 w-4" />
            Tính lương tự động
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tạo bảng lương mới
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng chi phí lương
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalPayroll)}
            </div>
            <p className="text-xs text-muted-foreground">
              Tháng {new Date().getMonth() + 1}/{new Date().getFullYear()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Lương trung bình
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(averageSalary)}
            </div>
            <p className="text-xs text-muted-foreground">
              +8.2% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Nhân viên đã tính lương
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {payrollData.filter((emp) => emp.status === 'Đã tính').length}
            </div>
            <p className="text-xs text-muted-foreground">
              / {payrollData.length} nhân viên
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng giờ tăng ca
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {payrollData.reduce((sum, emp) => sum + emp.overtimeHours, 0)}h
            </div>
            <p className="text-xs text-muted-foreground">Trong tháng này</p>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Cấu hình lương</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Hệ số lương cơ bản</label>
              <div className="text-lg font-semibold">1.0x</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Hệ số tăng ca ngày thường
              </label>
              <div className="text-lg font-semibold">1.5x</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Hệ số tăng ca cuối tuần
              </label>
              <div className="text-lg font-semibold">2.0x</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Hệ số tăng ca ngày lễ
              </label>
              <div className="text-lg font-semibold">3.0x</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Giờ làm chuẩn/tháng</label>
              <div className="text-lg font-semibold">176 giờ</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Thuế TNCN (%)</label>
              <div className="text-lg font-semibold">10-35%</div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline">Cập nhật cấu hình</Button>
          </div>
        </CardContent>
      </Card>

      {/* Payroll Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Bảng lương tháng {new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Chức vụ</TableHead>
                <TableHead className="text-right">Lương cơ bản</TableHead>
                <TableHead className="text-center">Giờ làm</TableHead>
                <TableHead className="text-center">Tăng ca</TableHead>
                <TableHead className="text-right">Phụ cấp</TableHead>
                <TableHead className="text-right">Khấu trừ</TableHead>
                <TableHead className="text-right">Tổng lương</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">
                    {employee.employeeName}
                  </TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(employee.baseSalary)}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">{employee.workHours}h</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        employee.overtimeHours > 0 ? 'default' : 'secondary'
                      }
                    >
                      {employee.overtimeHours}h
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(employee.allowances)}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(employee.deductions)}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(employee.totalSalary)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        employee.status === 'Đã tính' ? 'default' : 'secondary'
                      }
                    >
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Calculator className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-3 w-3" />
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
