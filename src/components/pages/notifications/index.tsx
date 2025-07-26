import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Bell, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const notifications = [
  {
    id: 1,
    title: 'Thông báo nghỉ lễ Quốc khánh 2/9',
    content:
      'Công ty sẽ nghỉ lễ từ ngày 2/9 đến 4/9. Nhân viên vui lòng sắp xếp công việc phù hợp.',
    type: 'info',
    priority: 'high',
    department: 'Toàn công ty',
    createdBy: 'Admin',
    createdAt: '2025-07-24 09:00',
    isRead: false,
  },
  {
    id: 2,
    title: 'Đào tạo an toàn lao động',
    content:
      'Khóa đào tạo an toàn lao động sẽ được tổ chức vào thứ 6 tuần này tại phòng họp lớn.',
    type: 'warning',
    priority: 'medium',
    department: 'Sản xuất',
    createdBy: 'HR Manager',
    createdAt: '2025-07-23 14:30',
    isRead: true,
  },
  {
    id: 3,
    title: 'Chúc mừng team IT hoàn thành dự án',
    content:
      'Chúc mừng team IT đã hoàn thành xuất sắc dự án website mới của công ty.',
    type: 'success',
    priority: 'low',
    department: 'IT',
    createdBy: 'CEO',
    createdAt: '2025-07-23 11:15',
    isRead: true,
  },
];

const getIconByType = (type: string) => {
  switch (type) {
    case 'info':
      return <Info className="h-4 w-4 text-blue-500" />;
    case 'warning':
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    case 'success':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'destructive';
    case 'medium':
      return 'default';
    case 'low':
      return 'secondary';
    default:
      return 'secondary';
  }
};

export function Notifications() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Thông báo nội bộ
          </h1>
          <p className="text-muted-foreground">
            Quản lý và gửi thông báo đến nhân viên
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Đánh dấu đã đọc tất cả
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tạo thông báo mới
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Thông báo chưa đọc
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Từ 3 phòng ban khác nhau
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Thông báo tuần này
            </CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +20% so với tuần trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ đọc</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              Tăng 5% so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách thông báo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={notification.id}>
              <div
                className={`flex items-start gap-4 p-4 rounded-lg border ${
                  !notification.isRead
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  {getIconByType(notification.type)}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-semibold ${
                        !notification.isRead ? 'text-blue-900' : 'text-gray-900'
                      }`}
                    >
                      {notification.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={getPriorityColor(notification.priority) as any}
                      >
                        {notification.priority === 'high'
                          ? 'Cao'
                          : notification.priority === 'medium'
                          ? 'Trung bình'
                          : 'Thấp'}
                      </Badge>
                      {!notification.isRead && (
                        <Badge variant="default">Chưa đọc</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {notification.content}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>Phòng ban: {notification.department}</span>
                      <span>Người gửi: {notification.createdBy}</span>
                    </div>
                    <span>{notification.createdAt}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Sửa
                  </Button>
                  <Button size="sm" variant="outline">
                    Xóa
                  </Button>
                </div>
              </div>
              {index < notifications.length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
