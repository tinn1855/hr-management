import { TemplateDefault } from '@/components/layout/default';
import { Dashboard } from '@/components/pages/dashboard';
import { Employees } from '@/components/pages/employees';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<TemplateDefault />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />

        <Route path="*" element={<>Not found</>}></Route>
      </Route>
    </Routes>
  );
}
