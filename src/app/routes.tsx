import { TemplateDefault } from '@/components/layout/default';
import { Dashboard } from '@/components/pages/dashboard';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<TemplateDefault />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
