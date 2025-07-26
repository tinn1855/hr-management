import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  DollarSign,
  Calendar,
  FileText,
  PieChart,
  Activity,
  Target,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const monthlyStats = [
  {
    month: 'Tháng 1',
    employees: 45,
    workHours: 7200,
    salary: 1800000000,
    attendance: 96,
  },
  {
    month: 'Tháng 2',
    employees: 47,
    workHours: 7520,
    salary: 1880000000,
    attendance: 94,
  },
  {
    month: 'Tháng 3',
    employees: 48,
    workHours: 7680,
    salary: 1920000000,
    attendance: 98,
  },
  {
    month: 'Tháng 4',
    employees: 50,
    workHours: 8000,
    salary: 2000000000,
    attendance: 97,
  },
  {
    month: 'Tháng 5',
    employees: 52,
    workHours: 8320,
    salary: 2080000000,
    attendance: 95,
  },
  {
    month: 'Tháng 6',
    employees: 52,
    workHours: 8320,
    salary: 2080000000,
    attendance: 99,
  },
  {
    month: 'Tháng 7',
    employees: 52,
    workHours: 8320,
    salary: 2400000000,
    attendance: 97,
  },
];

const departmentStats = [
  { department: 'IT', employees: 15, avgSalary: 25000000, productivity: 95 },
  {
    department: 'Marketing',
    employees: 12,
    avgSalary: 18000000,
    productivity: 88,
  },
  { department: 'Sales', employees: 18, avgSalary: 20000000, productivity: 92 },
  { department: 'HR', employees: 4, avgSalary: 22000000, productivity: 90 },
  {
    department: 'Finance',
    employees: 3,
    avgSalary: 24000000,
    productivity: 93,
  },
];

const leaveStats = [
  { type: 'Nghỉ phép năm', count: 45, percentage: 50 },
  { type: 'Nghỉ ốm', count: 25, percentage: 28 },
  { type: 'Nghỉ có việc riêng', count: 15, percentage: 17 },
  { type: 'Nghỉ thai sản', count: 5, percentage: 5 },
];

const kpiMetrics = [
  {
    metric: 'Tỷ lệ chấm công đúng giờ',
    current: 94,
    target: 95,
    trend: 'down',
  },
  {
    metric: 'Tỷ lệ hoàn thành công việc',
    current: 87,
    target: 90,
    trend: 'up',
  },
  {
    metric: 'Mức độ hài lòng nhân viên',
    current: 8.2,
    target: 8.5,
    trend: 'up',
  },
  { metric: 'Tỷ lệ nghỉ việc', current: 5, target: 3, trend: 'down' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(amount);
};

export function AnalyticsReport() {
  const currentMonth = monthlyStats[monthlyStats.length - 1];
  const previousMonth = monthlyStats[monthlyStats.length - 2];

  const employeeGrowth = (
    ((currentMonth.employees - previousMonth.employees) /
      previousMonth.employees) *
    100
  ).toFixed(1);
  const salaryGrowth = (
    ((currentMonth.salary - previousMonth.salary) / previousMonth.salary) *
    100
  ).toFixed(1);
  const attendanceChange = (
    currentMonth.attendance - previousMonth.attendance
  ).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Báo cáo & Thống kê
          </h1>
          <p className="text-muted-foreground">
            Phân tích dữ liệu nhân sự và hiệu suất công ty
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Tuần này</SelectItem>
              <SelectItem value="month">Tháng này</SelectItem>
              <SelectItem value="quarter">Quý này</SelectItem>
              <SelectItem value="year">Năm này</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Xuất Excel
          </Button>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Xuất PDF
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng nhân viên
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.employees}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {parseFloat(employeeGrowth) > 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              {Math.abs(parseFloat(employeeGrowth))}% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng giờ làm việc
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {currentMonth.workHours.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Giờ trong tháng này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chi phí lương</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(currentMonth.salary)}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              {parseFloat(salaryGrowth) > 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              {Math.abs(parseFloat(salaryGrowth))}% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tỷ lệ chấm công
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.attendance}%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {parseFloat(attendanceChange) > 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              {Math.abs(parseFloat(attendanceChange))}% so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Xu hướng theo tháng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyStats.slice(-6).map((stat) => (
                <div
                  key={stat.month}
                  className="flex items-center justify-between"
                >
                  <div className="font-medium">{stat.month}</div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-blue-600">{stat.employees} NV</div>
                    <div className="text-green-600">
                      {formatCurrency(stat.salary)}
                    </div>
                    <div className="text-purple-600">{stat.attendance}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Department Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Phân tích theo phòng ban
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept) => (
                <div key={dept.department} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{dept.department}</div>
                    <Badge variant="outline">{dept.employees} nhân viên</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div>Lương TB: {formatCurrency(dept.avgSalary)}</div>
                    <div className="flex items-center gap-1">
                      Hiệu suất: {dept.productivity}%
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${dept.productivity}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Leave Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Thống kê nghỉ phép
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveStats.map((leave) => (
                <div key={leave.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{leave.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {leave.count} đơn ({leave.percentage}%)
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${leave.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* KPI Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Chỉ số KPI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {kpiMetrics.map((kpi) => (
                <div key={kpi.metric} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{kpi.metric}</div>
                    <div className="flex items-center gap-2">
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className="text-sm font-medium">
                        {kpi.current}
                        {typeof kpi.current === 'number' && kpi.current < 10
                          ? '/10'
                          : '%'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div>
                      Mục tiêu: {kpi.target}
                      {typeof kpi.target === 'number' && kpi.target < 10
                        ? '/10'
                        : '%'}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full ${
                          kpi.current >= kpi.target
                            ? 'bg-green-600'
                            : 'bg-yellow-600'
                        }`}
                        style={{
                          width: `${Math.min(
                            (kpi.current / kpi.target) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Report */}
      <Card>
        <CardHeader>
          <CardTitle>
            Tóm tắt báo cáo tháng {new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold text-green-600">Điểm mạnh</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tỷ lệ chấm công đạt {currentMonth.attendance}%</li>
                <li>• Tăng trưởng nhân sự {employeeGrowth}%</li>
                <li>• Hiệu suất IT đạt 95%</li>
                <li>• Ít đơn nghỉ ốm</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-yellow-600">Cần cải thiện</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tỷ lệ hoàn thành công việc chưa đạt mục tiêu</li>
                <li>• Chi phí lương tăng cao</li>
                <li>• Hiệu suất Marketing cần cải thiện</li>
                <li>• Tỷ lệ nghỉ việc cao hơn mục tiêu</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-600">Khuyến nghị</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Đào tạo thêm cho team Marketing</li>
                <li>• Review lại quy trình làm việc</li>
                <li>• Tăng cường hoạt động team building</li>
                <li>• Khảo sát mức độ hài lòng nhân viên</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
