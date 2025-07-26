import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'hr' | 'employee';
  department: string;
  position: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Simulate checking for existing authentication
    const checkAuth = async () => {
      try {
        // This would normally be an API call to verify token
        const token = localStorage.getItem('auth_token');
        if (token) {
          // Mock user data - replace with actual API call
          const mockUser: User = {
            id: 1,
            name: 'Admin User',
            email: 'tinn1855@gmail.com',
            role: 'admin',
            department: 'IT',
            position: 'System Administrator',
          };

          setAuthState({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // This would be an actual API call
      console.log('Logging in with:', email, password);

      // Mock successful login
      const mockUser: User = {
        id: 1,
        name: 'Admin User',
        email: email,
        role: 'admin',
        department: 'IT',
        position: 'System Administrator',
      };

      localStorage.setItem('auth_token', 'mock_token_123');
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials' };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const updateUser = (userData: Partial<User>) => {
    if (authState.user) {
      setAuthState((prev) => ({
        ...prev,
        user: { ...prev.user!, ...userData },
      }));
    }
  };

  return {
    ...authState,
    login,
    logout,
    updateUser,
  };
}
