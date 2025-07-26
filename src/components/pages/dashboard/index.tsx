import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle,
  UserCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const statsCards = [
  {
    title: 'Tổng nhân viên',
    value: '152',
    change: '+12%',
    icon: Users,
    color: 'text-blue-500',
  },
  {
    title: 'Đã chấm công hôm nay',
    value: '148',
    change: '97.4%',
    icon: UserCheck,
    color: 'text-green-500',
  },
  {
    title: 'Tổng giờ làm tuần này',
    value: '6,240',
    change: '+5.2%',
    icon: Clock,
    color: 'text-purple-500',
  },
  {
    title: 'Chi phí lương tháng này',
    value: '2.4B VND',
    change: '+8.1%',
    icon: DollarSign,
    color: 'text-yellow-500',
  },
];

const recentActivities = [
  {
    id: 1,
    type: 'checkin',
    message: 'Nguyễn Văn A đã check-in lúc 08:15',
    time: '2 phút trước',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    id: 2,
    type: 'leave_request',
    message: 'Trần Thị B gửi đơn xin nghỉ phép',
    time: '5 phút trước',
    icon: Calendar,
    color: 'text-blue-500',
  },
  {
    id: 3,
    type: 'late',
    message: 'Lê Văn C đi muộn 15 phút',
    time: '10 phút trước',
    icon: AlertCircle,
    color: 'text-red-500',
  },
  {
    id: 4,
    type: 'overtime',
    message: 'Phạm Thị D đăng ký tăng ca',
    time: '15 phút trước',
    icon: Clock,
    color: 'text-purple-500',
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Tổng quan hệ thống quản lý nhân sự
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <TrendingUp className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} so với tháng trước
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Thao tác nhanh</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Thêm nhân viên mới
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Xem báo cáo chấm công
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <DollarSign className="mr-2 h-4 w-4" />
              Tính lương tháng
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Phê duyệt đơn nghỉ phép
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Today's Summary */}
      <Card>
        <CardHeader>
          <CardTitle>
            Tóm tắt hôm nay - {new Date().toLocaleDateString('vi-VN')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">148</div>
              <div className="text-sm text-muted-foreground">Đã check-in</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-muted-foreground">Đi muộn</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-muted-foreground">Tăng ca</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">5</div>
              <div className="text-sm text-muted-foreground">Đơn nghỉ phép</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
