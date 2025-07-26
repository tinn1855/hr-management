import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/contexts/auth-context';
import { AppRoutes } from './routes';

export function App() {
  console.log('🏁 App component is loading!');

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
