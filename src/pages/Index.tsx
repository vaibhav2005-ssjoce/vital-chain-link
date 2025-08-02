import { useState } from 'react';
import { AuthForm, UserRole } from '@/components/auth/AuthForm';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { PatientDashboard } from '@/components/dashboard/PatientDashboard';
import { DoctorDashboard } from '@/components/dashboard/DoctorDashboard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    email: string;
    role: UserRole;
    name: string;
  } | null>(null);
  const { toast } = useToast();

  const handleAuth = (email: string, password: string, role: UserRole, isSignUp: boolean) => {
    // Mock authentication - in real app, this would call Supabase
    const userData = {
      email,
      role,
      name: isSignUp ? 'New User' : getNameByRole(role)
    };
    
    setCurrentUser(userData);
    setIsAuthenticated(true);
    
    toast({
      title: isSignUp ? 'Account Created' : 'Welcome Back',
      description: `Successfully ${isSignUp ? 'registered' : 'signed in'} as ${role}`,
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    toast({
      title: 'Signed Out',
      description: 'You have been securely signed out of the system',
    });
  };

  const getNameByRole = (role: UserRole): string => {
    const names = {
      patient: 'John Smith',
      doctor: 'Sarah Wilson',
      pharmacy: 'Central Pharmacy',
      admin: 'System Admin'
    };
    return names[role];
  };

  const renderDashboard = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case 'patient':
        return <PatientDashboard />;
      case 'doctor':
        return <DoctorDashboard />;
      case 'pharmacy':
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Pharmacy Dashboard</h2>
            <p className="text-muted-foreground">Pharmacy dashboard coming soon...</p>
          </div>
        );
      case 'admin':
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <p className="text-muted-foreground">Admin dashboard coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isAuthenticated || !currentUser) {
    return <AuthForm onAuth={handleAuth} />;
  }

  return (
    <DashboardLayout
      userRole={currentUser.role}
      userName={currentUser.name}
      onLogout={handleLogout}
    >
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Index;