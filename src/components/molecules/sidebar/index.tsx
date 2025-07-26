import {
  Bell,
  Calendar1,
  ChevronUp,
  Clock,
  DollarSign,
  FileChartColumnIncreasing,
  Hand,
  Home,
  Inbox,
  LogOut,
  Settings,
  User2,
  Users,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/contexts/auth-context';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Quản lý nhân sự',
    url: 'employees',
    icon: Users,
  },
  {
    title: 'Quản lý công việc',
    url: 'work-management',
    icon: Inbox,
  },
  {
    title: 'Quản lý phòng ban',
    url: 'department',
    icon: Inbox,
  },
  {
    title: 'Quản lý lương',
    url: 'payroll',
    icon: DollarSign,
  },
  {
    title: 'Chấm công',
    url: 'attendance',
    icon: Hand,
  },
  {
    title: 'Nghỉ phép & Xin phép',
    url: 'leave-request',
    icon: Calendar1,
  },
  {
    title: 'Phân ca làm việc',
    url: 'work-schedule',
    icon: Clock,
  },
  {
    title: 'Thông báo nội bộ',
    url: 'notifications',
    icon: Bell,
  },
  {
    title: 'Báo cáo, thống kê',
    url: 'analytics-report',
    icon: FileChartColumnIncreasing,
  },
  {
    title: 'Cài đặt hệ thống',
    url: 'settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const { user, logout } = useAuthContext();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-between">
            <div className={`${open ? 'flex gap-2 items-center' : 'hidden'}`}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  {user?.name.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{user?.name || 'User'}</h3>
                <p className="text-xs text-muted-foreground">
                  {user?.role || 'Employee'}
                </p>
              </div>
            </div>
            <SidebarTrigger />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user?.email || 'user@example.com'}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full">
                    <User2 className="mr-2 h-4 w-4" />
                    <span>Hồ sơ cá nhân</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
