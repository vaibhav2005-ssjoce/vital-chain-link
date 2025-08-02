import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  FileText, 
  Pill, 
  Activity, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  User,
  Download
} from 'lucide-react';

export function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      date: '2024-08-05',
      time: '10:30 AM',
      type: 'Follow-up'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: '2024-08-12',
      time: '2:15 PM',
      type: 'Annual Checkup'
    }
  ];

  const activePrescriptions = [
    {
      id: 1,
      medication: 'Lisinopril 10mg',
      prescribedBy: 'Dr. Sarah Wilson',
      dosage: 'Once daily',
      remaining: 15,
      refillDate: '2024-08-15'
    },
    {
      id: 2,
      medication: 'Metformin 500mg',
      prescribedBy: 'Dr. Michael Chen',
      dosage: 'Twice daily',
      remaining: 8,
      refillDate: '2024-08-10'
    }
  ];

  const recentResults = [
    {
      id: 1,
      test: 'Blood Pressure Check',
      date: '2024-07-28',
      result: '120/80 mmHg',
      status: 'normal'
    },
    {
      id: 2,
      test: 'Cholesterol Panel',
      date: '2024-07-20',
      result: 'LDL: 145 mg/dL',
      status: 'attention'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-card shadow-medical">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-accent" />
            Your Health Dashboard
          </CardTitle>
          <CardDescription>
            Stay on top of your health with easy access to appointments, prescriptions, and medical records.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Appointment</p>
                <p className="font-semibold">Aug 5, 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Pill className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Prescriptions</p>
                <p className="font-semibold">2 medications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Needs Attention</p>
                <p className="font-semibold">1 result</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Health Score</p>
                <p className="font-semibold">85/100</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>Your scheduled medical appointments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{appointment.doctor}</p>
                  <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-sm">{appointment.date} at {appointment.time}</span>
                  </div>
                </div>
                <Badge variant="outline">{appointment.type}</Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Appointments
            </Button>
          </CardContent>
        </Card>

        {/* Active Prescriptions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-accent" />
              Active Prescriptions
            </CardTitle>
            <CardDescription>Your current medications and refill information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activePrescriptions.map((prescription) => (
              <div key={prescription.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{prescription.medication}</p>
                    <p className="text-sm text-muted-foreground">
                      Prescribed by {prescription.prescribedBy}
                    </p>
                    <p className="text-sm">{prescription.dosage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      <span className={prescription.remaining < 10 ? 'text-destructive' : 'text-accent'}>
                        {prescription.remaining} pills remaining
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Refill by {prescription.refillDate}
                    </p>
                  </div>
                </div>
                {prescription.remaining < 10 && (
                  <Button size="sm" className="mt-2 w-full">
                    Request Refill
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Prescriptions
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Test Results */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Recent Test Results
          </CardTitle>
          <CardDescription>Your latest medical test results and reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentResults.map((result) => (
              <div key={result.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{result.test}</p>
                  <p className="text-sm text-muted-foreground">{result.date}</p>
                  <p className="text-sm">{result.result}</p>
                </div>
                <div className="flex items-center gap-2">
                  {result.status === 'normal' ? (
                    <Badge className="bg-accent text-accent-foreground">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Normal
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Attention
                    </Badge>
                  )}
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Test Results
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}