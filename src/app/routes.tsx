import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/auth-context';
import { TemplateDefault } from '@/components/layout/default';
import { AnalyticsReport } from '@/components/pages/analytics-report';
import { Attendance } from '@/components/pages/attendance';
import { Dashboard } from '@/components/pages/dashboard';
import { Department } from '@/components/pages/department';
import { Employees } from '@/components/pages/employees';
import { LeaveRequest } from '@/components/pages/leave-request';
import { Notifications } from '@/components/pages/notifications';
import { Payroll } from '@/components/pages/payroll';
import { Profile } from '@/components/pages/profile';
import { Settings } from '@/components/pages/settings';
import { WorkManagement } from '@/components/pages/work-management';
import { WorkSchedule } from '@/components/pages/work-schedule';
import { SignIn } from '@/components/pages/sign-in';
import { TestPage } from '@/components/pages/test';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  console.log('🔒 ProtectedRoute check...');

  // Temporarily disable authentication for debugging
  return children;

  /* Original code:
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
  */
}

export function AppRoutes() {
  console.log('🗺️ AppRoutes is rendering!');

  const { isAuthenticated } = useAuthContext();

  console.log('🔐 Auth status:', { isAuthenticated });

  return (
    <Routes>
      {/* Public test route */}
      <Route path="/test" element={<TestPage />} />

      {/* Public routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <SignIn />}
      />

      {/* Protected routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route element={<TemplateDefault />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/work-management" element={<WorkManagement />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leave-request" element={<LeaveRequest />} />
                <Route path="/work-schedule" element={<WorkSchedule />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/department" element={<Department />} />
                <Route path="/analytics-report" element={<AnalyticsReport />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
