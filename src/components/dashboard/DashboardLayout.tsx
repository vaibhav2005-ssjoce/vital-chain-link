import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  Calendar, 
  FileText, 
  LogOut, 
  Menu, 
  Settings, 
  Shield, 
  Stethoscope, 
  User, 
  Building2,
  Heart,
  Activity
} from 'lucide-react';
import { UserRole } from '../auth/AuthForm';

interface DashboardLayoutProps {
  userRole: UserRole;
  userName: string;
  children: ReactNode;
  onLogout: () => void;
}

const roleConfig = {
  patient: {
    icon: User,
    color: 'bg-accent',
    title: 'Patient Portal',
    greeting: 'Welcome back'
  },
  doctor: {
    icon: Stethoscope,
    color: 'bg-primary',
    title: 'Doctor Dashboard',
    greeting: 'Good day, Dr.'
  },
  pharmacy: {
    icon: Building2,
    color: 'bg-warning',
    title: 'Pharmacy System',
    greeting: 'Welcome to'
  },
  admin: {
    icon: Shield,
    color: 'bg-destructive',
    title: 'Admin Panel',
    greeting: 'System Administrator'
  }
};

export function DashboardLayout({ userRole, userName, children, onLogout }: DashboardLayoutProps) {
  const config = roleConfig[userRole];
  const RoleIcon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${config.color}`}>
                <RoleIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">{config.title}</h1>
                <p className="text-sm text-muted-foreground">
                  {config.greeting} {userName}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-4">
              <Card className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">System Active</span>
                </div>
              </Card>
              <Card className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-medium">Secure</span>
                </div>
              </Card>
            </div>

            {/* Notifications */}
            <Button variant="outline" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs flex items-center justify-center text-destructive-foreground">
                3
              </span>
            </Button>

            {/* User Menu */}
            <div className="flex items-center gap-2">
              <Badge className={`${config.color} text-primary-foreground`}>
                <RoleIcon className="w-3 h-3 mr-1" />
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
              </Badge>
              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={onLogout}
                className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}