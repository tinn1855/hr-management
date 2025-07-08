import { TemplateDefault } from '@/components/layout/default';
import { AnalyticsReport } from '@/components/pages/analytics-report';
import { Attendance } from '@/components/pages/attendance';
import { Dashboard } from '@/components/pages/dashboard';
import { Department } from '@/components/pages/department';
import { Employees } from '@/components/pages/employees';
import { LeaveRequest } from '@/components/pages/leave-request';
import { Payroll } from '@/components/pages/payroll';
import { WorkManagement } from '@/components/pages/work-management';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<TemplateDefault />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="work-management" element={<WorkManagement />} />
        <Route path="employees" element={<Employees />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leave-request" element={<LeaveRequest />} />
        <Route path="department" element={<Department />} />
        <Route path="analytics-report" element={<AnalyticsReport />} />

        <Route path="*" element={<>Not found</>}></Route>
      </Route>
    </Routes>
  );
}
