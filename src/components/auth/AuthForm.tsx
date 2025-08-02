import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Shield, Stethoscope, User, Building2 } from 'lucide-react';

export type UserRole = 'patient' | 'doctor' | 'pharmacy' | 'admin';

interface AuthFormProps {
  onAuth: (email: string, password: string, role: UserRole, isSignUp: boolean) => void;
}

const roleIcons = {
  patient: User,
  doctor: Stethoscope, 
  pharmacy: Building2,
  admin: Shield
};

const roleColors = {
  patient: 'bg-accent',
  doctor: 'bg-primary',
  pharmacy: 'bg-warning',
  admin: 'bg-destructive'
};

export function AuthForm({ onAuth }: AuthFormProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>('patient');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onAuth(email, password, role, isSignUp);
  };

  const RoleIcon = roleIcons[role];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="w-full max-w-md shadow-medical">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? 'Register for secure access to the medical system' 
              : 'Access your secure medical dashboard'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">Account Type</Label>
              <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                <SelectTrigger className="shadow-form">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="patient">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Patient</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="doctor">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4" />
                      <span>Doctor</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="pharmacy">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>Pharmacy</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Administrator</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Badge className={`${roleColors[role]} text-primary-foreground w-fit`}>
                <RoleIcon className="w-3 h-3 mr-1" />
                {role.charAt(0).toUpperCase() + role.slice(1)} Account
              </Badge>
            </div>

            {/* Name Fields for Sign Up */}
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="shadow-form"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="shadow-form"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow-form"
                placeholder="your.email@medical.com"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow-form"
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password for Sign Up */}
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="shadow-form"
                  placeholder="••••••••"
                />
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary shadow-medical"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>

            {/* Toggle Mode */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}