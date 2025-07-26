import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '@/hooks/use-auth';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'hr' | 'employee';
  department: string;
  position: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  console.log('🔐 AuthProvider is loading!');

  const auth = useAuth();

  console.log('🔐 Auth state:', auth);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
