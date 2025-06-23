import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../molecules/sidebar';
import { SidebarProvider } from '../ui/sidebar';

export function TemplateDefault() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <Outlet></Outlet>
    </SidebarProvider>
  );
}
