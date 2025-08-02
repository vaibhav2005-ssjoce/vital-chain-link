import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  FileText, 
  Users, 
  Stethoscope, 
  Clock, 
  Plus,
  Search,
  AlertTriangle,
  CheckCircle,
  Pill,
  Activity
} from 'lucide-react';

export function DoctorDashboard() {
  const todayAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      time: '09:00 AM',
      type: 'Follow-up',
      status: 'confirmed',
      condition: 'Hypertension'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      time: '10:30 AM',
      type: 'New Patient',
      status: 'pending',
      condition: 'General Checkup'
    },
    {
      id: 3,
      patient: 'Michael Davis',
      time: '02:15 PM',
      type: 'Follow-up',
      status: 'confirmed',
      condition: 'Diabetes Management'
    }
  ];

  const recentPrescriptions = [
    {
      id: 1,
      patient: 'John Smith',
      medication: 'Lisinopril 10mg',
      date: '2024-08-01',
      status: 'dispensed'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      medication: 'Metformin 500mg',
      date: '2024-08-01',
      status: 'pending'
    }
  ];

  const urgentItems = [
    {
      id: 1,
      type: 'lab_result',
      patient: 'Emma Wilson',
      description: 'Abnormal cholesterol levels',
      priority: 'high'
    },
    {
      id: 2,
      type: 'prescription',
      patient: 'Robert Brown',
      description: 'Prescription authorization needed',
      priority: 'medium'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-card shadow-medical">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-primary" />
            Doctor Dashboard
          </CardTitle>
          <CardDescription>
            Manage your patients, appointments, and medical records efficiently.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button className="bg-gradient-primary">
              <Plus className="w-4 h-4 mr-2" />
              New Prescription
            </Button>
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Find Patient
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Create Report
            </Button>
          </div>
        </CardContent>
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
                <p className="text-sm text-muted-foreground">Today's Appointments</p>
                <p className="font-semibold">3 scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Patients</p>
                <p className="font-semibold">142 patients</p>
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
                <p className="text-sm text-muted-foreground">Urgent Items</p>
                <p className="font-semibold">2 require attention</p>
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
                <p className="text-sm text-muted-foreground">Prescriptions</p>
                <p className="font-semibold">12 this week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your appointments for August 2, 2024</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <p className="text-sm font-medium">{appointment.time}</p>
                    <Badge 
                      variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    <p className="text-xs text-muted-foreground">{appointment.condition}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Urgent Items */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Urgent Items
            </CardTitle>
            <CardDescription>Items requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {urgentItems.map((item) => (
              <div key={item.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{item.patient}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge 
                        variant={item.priority === 'high' ? 'destructive' : 'secondary'}
                      >
                        {item.priority} priority
                      </Badge>
                      <Badge variant="outline">
                        {item.type === 'lab_result' ? 'Lab Result' : 'Prescription'}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm">
                    Review
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Urgent Items
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Prescriptions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-accent" />
            Recent Prescriptions
          </CardTitle>
          <CardDescription>Recently issued digital prescriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPrescriptions.map((prescription) => (
              <div key={prescription.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{prescription.patient}</p>
                  <p className="text-sm text-muted-foreground">{prescription.medication}</p>
                  <p className="text-xs text-muted-foreground">Issued: {prescription.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    className={prescription.status === 'dispensed' ? 'bg-accent text-accent-foreground' : ''}
                    variant={prescription.status === 'dispensed' ? 'default' : 'secondary'}
                  >
                    {prescription.status === 'dispensed' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {prescription.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Prescriptions
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}