import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Edit,
  Save,
  X,
  Upload,
  Clock,
  DollarSign,
} from 'lucide-react';
import { useAuthContext } from '@/contexts/auth-context';

const attendanceHistory = [
  {
    date: '2025-07-24',
    checkIn: '08:00',
    checkOut: '17:30',
    hours: '9.5',
    status: 'On time',
  },
  {
    date: '2025-07-23',
    checkIn: '08:15',
    checkOut: '17:45',
    hours: '9.5',
    status: 'Late',
  },
  {
    date: '2025-07-22',
    checkIn: '07:55',
    checkOut: '17:25',
    hours: '9.5',
    status: 'Early',
  },
  {
    date: '2025-07-21',
    checkIn: '08:00',
    checkOut: '17:30',
    hours: '9.5',
    status: 'On time',
  },
  {
    date: '2025-07-20',
    checkIn: '08:05',
    checkOut: '17:35',
    hours: '9.5',
    status: 'On time',
  },
];

const leaveHistory = [
  {
    date: '2025-07-15',
    type: 'Nghỉ phép năm',
    days: 2,
    status: 'Approved',
    reason: 'Nghỉ phép hè',
  },
  {
    date: '2025-06-20',
    type: 'Nghỉ ốm',
    days: 1,
    status: 'Approved',
    reason: 'Bị cảm sốt',
  },
  {
    date: '2025-05-10',
    type: 'Nghỉ có việc riêng',
    days: 0.5,
    status: 'Approved',
    reason: 'Khám bệnh',
  },
];

export function Profile() {
  const { user, updateUser } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+84 123 456 789',
    address: 'Hà Nội, Việt Nam',
    department: user?.department || '',
    position: user?.position || '',
    joinDate: '2024-01-15',
    salary: '25,000,000 VND',
  });

  const handleSave = () => {
    updateUser({
      name: formData.name,
      email: formData.email,
      department: formData.department,
      position: formData.position,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '+84 123 456 789',
      address: 'Hà Nội, Việt Nam',
      department: user?.department || '',
      position: user?.position || '',
      joinDate: '2024-01-15',
      salary: '25,000,000 VND',
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hồ sơ cá nhân</h1>
          <p className="text-muted-foreground">
            Quản lý thông tin cá nhân và xem lịch sử công việc
          </p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="mr-2 h-4 w-4" />
                Hủy
              </Button>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Lưu
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="mr-2 h-4 w-4" />
              Chỉnh sửa
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Information */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                    >
                      <Upload className="h-3 w-3" />
                    </Button>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <Badge variant="outline">{user?.role?.toUpperCase()}</Badge>
                  <h3 className="text-xl font-semibold">{user?.name}</h3>
                  <p className="text-muted-foreground">{formData.position}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.phone}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Địa chỉ</Label>
                  {isEditing ? (
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin công việc</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="department">Phòng ban</Label>
                  {isEditing ? (
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          department: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.department}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Chức vụ</Label>
                  {isEditing ? (
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          position: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{formData.position}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Ngày vào công ty</Label>
                  <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{formData.joinDate}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Mức lương</Label>
                  <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{formData.salary}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Thống kê tháng này</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Giờ làm việc</span>
                </div>
                <span className="font-medium">176h</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Tăng ca</span>
                </div>
                <span className="font-medium">12h</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Nghỉ phép</span>
                </div>
                <span className="font-medium">2 ngày</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Đánh giá</span>
                </div>
                <Badge variant="default">Tốt</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Attendance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chấm công gần đây</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {attendanceHistory.slice(0, 5).map((record) => (
                  <div
                    key={record.date}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <div className="font-medium">{record.date}</div>
                      <div className="text-muted-foreground text-xs">
                        {record.checkIn} - {record.checkOut}
                      </div>
                    </div>
                    <Badge
                      variant={
                        record.status === 'On time' ? 'default' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {record.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Leave History */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch sử nghỉ phép</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaveHistory.map((leave, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{leave.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {leave.reason}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Ngày: {leave.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="default">{leave.status}</Badge>
                  <div className="text-sm text-muted-foreground mt-1">
                    {leave.days} ngày
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
