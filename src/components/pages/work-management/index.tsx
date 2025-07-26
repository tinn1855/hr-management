import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Calendar,
  Clock,
  Users,
  Plus,
  Filter,
  CheckCircle,
  AlertCircle,
  XCircle,
  Timer,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Thiết kế lại website công ty với giao diện hiện đại',
    status: 'In Progress',
    priority: 'High',
    assignees: ['Nguyễn Văn A', 'Trần Thị B'],
    startDate: '2025-07-01',
    endDate: '2025-08-15',
    progress: 65,
    department: 'IT',
    budget: '500,000,000 VND',
  },
  {
    id: 2,
    name: 'Marketing Campaign Q3',
    description: 'Chiến dịch marketing quý 3 cho sản phẩm mới',
    status: 'Planning',
    priority: 'Medium',
    assignees: ['Lê Văn C', 'Phạm Thị D', 'Hoàng Văn E'],
    startDate: '2025-08-01',
    endDate: '2025-09-30',
    progress: 25,
    department: 'Marketing',
    budget: '300,000,000 VND',
  },
  {
    id: 3,
    name: 'HR System Integration',
    description: 'Tích hợp hệ thống HR với các hệ thống khác',
    status: 'Completed',
    priority: 'High',
    assignees: ['Nguyễn Văn A'],
    startDate: '2025-06-01',
    endDate: '2025-07-20',
    progress: 100,
    department: 'IT',
    budget: '200,000,000 VND',
  },
  {
    id: 4,
    name: 'Sales Training Program',
    description: 'Chương trình đào tạo bán hàng cho team sales',
    status: 'On Hold',
    priority: 'Low',
    assignees: ['Võ Thị F', 'Đặng Văn G'],
    startDate: '2025-09-01',
    endDate: '2025-10-15',
    progress: 10,
    department: 'Sales',
    budget: '150,000,000 VND',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'In Progress':
      return <Timer className="h-4 w-4 text-blue-500" />;
    case 'Planning':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'On Hold':
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'default';
    case 'In Progress':
      return 'default';
    case 'Planning':
      return 'secondary';
    case 'On Hold':
      return 'destructive';
    default:
      return 'outline';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'destructive';
    case 'Medium':
      return 'default';
    case 'Low':
      return 'secondary';
    default:
      return 'outline';
  }
};

export function WorkManagement() {
  const totalProjects = projects.length;
  const inProgressProjects = projects.filter(
    (p) => p.status === 'In Progress'
  ).length;
  const completedProjects = projects.filter(
    (p) => p.status === 'Completed'
  ).length;
  const avgProgress = Math.round(
    projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý công việc
          </h1>
          <p className="text-muted-foreground">
            Quản lý dự án và công việc của công ty
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Lọc dự án
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tạo dự án mới
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng dự án</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">Đang quản lý</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Đang thực hiện
            </CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressProjects}</div>
            <p className="text-xs text-muted-foreground">Dự án đang chạy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đã hoàn thành</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedProjects}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((completedProjects / totalProjects) * 100)}% tổng dự
              án
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tiến độ trung bình
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgProgress}%</div>
            <p className="text-xs text-muted-foreground">Của tất cả dự án</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Phòng ban:</label>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Trạng thái:</label>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Ưu tiên:</label>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách dự án</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên dự án</TableHead>
                <TableHead>Mô tả</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ưu tiên</TableHead>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Tiến độ</TableHead>
                <TableHead>Thời hạn</TableHead>
                <TableHead>Ngân sách</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {project.description}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(project.status)}
                      <Badge variant={getStatusColor(project.status) as any}>
                        {project.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPriorityColor(project.priority) as any}>
                      {project.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex -space-x-2">
                      {project.assignees.slice(0, 3).map((assignee, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white"
                          title={assignee}
                        >
                          {assignee.charAt(0)}
                        </div>
                      ))}
                      {project.assignees.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs border-2 border-white">
                          +{project.assignees.length - 3}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{project.department}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {project.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{project.startDate}</div>
                      <div className="text-muted-foreground">
                        đến {project.endDate}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{project.budget}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Xem
                      </Button>
                      <Button size="sm" variant="outline">
                        Sửa
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
