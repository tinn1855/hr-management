import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Settings as SettingsIcon,
  Save,
  RefreshCw,
  Shield,
  Clock,
  DollarSign,
  Users,
  Bell,
  Database,
  Security,
  Palette,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuthContext } from '@/contexts/auth-context';

export function Settings() {
  const { user } = useAuthContext();
  const [settings, setSettings] = useState({
    // Company Settings
    companyName: 'HR Management Company',
    companyAddress: 'Hà Nội, Việt Nam',
    companyPhone: '+84 123 456 789',
    companyEmail: 'hr@company.com',

    // Work Settings
    standardWorkHours: '8',
    workDaysPerWeek: '5',
    startTime: '08:00',
    endTime: '17:00',

    // Salary Settings
    overtimeRateWeekday: '1.5',
    overtimeRateWeekend: '2.0',
    overtimeRateHoliday: '3.0',
    currency: 'VND',

    // Leave Settings
    annualLeave: '12',
    sickLeave: '30',
    maternityLeave: '180',

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,

    // Security Settings
    sessionTimeout: '30',
    passwordMinLength: '8',
    requireTwoFactor: false,

    // System Settings
    language: 'vi',
    timezone: 'Asia/Ho_Chi_Minh',
    dateFormat: 'DD/MM/YYYY',
    theme: 'light',
  });

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
    alert('Cài đặt đã được lưu thành công!');
  };

  const handleReset = () => {
    // Reset to default settings
    setSettings({
      companyName: 'HR Management Company',
      companyAddress: 'Hà Nội, Việt Nam',
      companyPhone: '+84 123 456 789',
      companyEmail: 'hr@company.com',
      standardWorkHours: '8',
      workDaysPerWeek: '5',
      startTime: '08:00',
      endTime: '17:00',
      overtimeRateWeekday: '1.5',
      overtimeRateWeekend: '2.0',
      overtimeRateHoliday: '3.0',
      currency: 'VND',
      annualLeave: '12',
      sickLeave: '30',
      maternityLeave: '180',
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      sessionTimeout: '30',
      passwordMinLength: '8',
      requireTwoFactor: false,
      language: 'vi',
      timezone: 'Asia/Ho_Chi_Minh',
      dateFormat: 'DD/MM/YYYY',
      theme: 'light',
    });
    alert('Cài đặt đã được khôi phục về mặc định!');
  };

  // Only allow admin to access settings
  if (user?.role !== 'admin') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Không có quyền truy cập
          </h2>
          <p className="text-gray-500">
            Chỉ Admin mới có thể truy cập trang cài đặt hệ thống.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Cài đặt hệ thống
          </h1>
          <p className="text-muted-foreground">
            Quản lý cấu hình và tùy chọn của hệ thống HR
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Khôi phục mặc định
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Lưu cài đặt
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Thông tin công ty
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Tên công ty</Label>
              <Input
                id="companyName"
                value={settings.companyName}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    companyName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyAddress">Địa chỉ</Label>
              <Input
                id="companyAddress"
                value={settings.companyAddress}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    companyAddress: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyPhone">Số điện thoại</Label>
              <Input
                id="companyPhone"
                value={settings.companyPhone}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    companyPhone: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyEmail">Email</Label>
              <Input
                id="companyEmail"
                type="email"
                value={settings.companyEmail}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    companyEmail: e.target.value,
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Work Time Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Cài đặt thời gian làm việc
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="standardWorkHours">Giờ làm chuẩn/ngày</Label>
                <Input
                  id="standardWorkHours"
                  type="number"
                  value={settings.standardWorkHours}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      standardWorkHours: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workDaysPerWeek">Ngày làm/tuần</Label>
                <Input
                  id="workDaysPerWeek"
                  type="number"
                  value={settings.workDaysPerWeek}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      workDaysPerWeek: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startTime">Giờ bắt đầu</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={settings.startTime}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      startTime: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">Giờ kết thúc</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={settings.endTime}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      endTime: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Salary Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Cài đặt lương và tăng ca
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Đơn vị tiền tệ</Label>
              <Select
                value={settings.currency}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, currency: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VND">VND - Việt Nam Đồng</SelectItem>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="overtimeRateWeekday">Hệ số ngày thường</Label>
                <Input
                  id="overtimeRateWeekday"
                  type="number"
                  step="0.1"
                  value={settings.overtimeRateWeekday}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      overtimeRateWeekday: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overtimeRateWeekend">Hệ số cuối tuần</Label>
                <Input
                  id="overtimeRateWeekend"
                  type="number"
                  step="0.1"
                  value={settings.overtimeRateWeekend}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      overtimeRateWeekend: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overtimeRateHoliday">Hệ số ngày lễ</Label>
                <Input
                  id="overtimeRateHoliday"
                  type="number"
                  step="0.1"
                  value={settings.overtimeRateHoliday}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      overtimeRateHoliday: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leave Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Cài đặt nghỉ phép
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="annualLeave">Nghỉ phép năm (ngày)</Label>
              <Input
                id="annualLeave"
                type="number"
                value={settings.annualLeave}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    annualLeave: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sickLeave">Nghỉ ốm (ngày/năm)</Label>
              <Input
                id="sickLeave"
                type="number"
                value={settings.sickLeave}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    sickLeave: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maternityLeave">Nghỉ thai sản (ngày)</Label>
              <Input
                id="maternityLeave"
                type="number"
                value={settings.maternityLeave}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    maternityLeave: e.target.value,
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Cài đặt thông báo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="emailNotifications">Thông báo Email</Label>
              <Button
                variant={settings.emailNotifications ? 'default' : 'outline'}
                size="sm"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    emailNotifications: !prev.emailNotifications,
                  }))
                }
              >
                {settings.emailNotifications ? 'Bật' : 'Tắt'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="smsNotifications">Thông báo SMS</Label>
              <Button
                variant={settings.smsNotifications ? 'default' : 'outline'}
                size="sm"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    smsNotifications: !prev.smsNotifications,
                  }))
                }
              >
                {settings.smsNotifications ? 'Bật' : 'Tắt'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="pushNotifications">Push Notifications</Label>
              <Button
                variant={settings.pushNotifications ? 'default' : 'outline'}
                size="sm"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    pushNotifications: !prev.pushNotifications,
                  }))
                }
              >
                {settings.pushNotifications ? 'Bật' : 'Tắt'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Cài đặt hệ thống
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Ngôn ngữ</Label>
              <Select
                value={settings.language}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, language: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vi">Tiếng Việt</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Múi giờ</Label>
              <Select
                value={settings.timezone}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, timezone: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Ho_Chi_Minh">
                    Asia/Ho_Chi_Minh
                  </SelectItem>
                  <SelectItem value="Asia/Bangkok">Asia/Bangkok</SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateFormat">Định dạng ngày</Label>
              <Select
                value={settings.dateFormat}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, dateFormat: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                  <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                  <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Settings Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Tóm tắt cài đặt hiện tại</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-lg font-bold text-blue-600">
                {settings.standardWorkHours}h
              </div>
              <div className="text-sm text-muted-foreground">Giờ làm/ngày</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-lg font-bold text-green-600">
                {settings.overtimeRateWeekday}x
              </div>
              <div className="text-sm text-muted-foreground">Hệ số tăng ca</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-lg font-bold text-purple-600">
                {settings.annualLeave}
              </div>
              <div className="text-sm text-muted-foreground">Ngày phép/năm</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-lg font-bold text-yellow-600">
                {settings.sessionTimeout}m
              </div>
              <div className="text-sm text-muted-foreground">
                Session timeout
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
