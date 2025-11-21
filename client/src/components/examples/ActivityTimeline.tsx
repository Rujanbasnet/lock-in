import { ActivityTimeline } from '../ActivityTimeline';

export default function ActivityTimelineExample() {
  const mockActivities = [
    {
      id: '1',
      name: 'Email & Communication',
      category: 'Work',
      duration: 45,
      startTime: '9:00 AM',
      color: 'bg-chart-1',
    },
    {
      id: '2',
      name: 'Project Development',
      category: 'Work',
      duration: 120,
      startTime: '10:00 AM',
      color: 'bg-chart-1',
    },
    {
      id: '3',
      name: 'Social Media',
      category: 'Social',
      duration: 30,
      startTime: '12:30 PM',
      color: 'bg-chart-3',
    },
  ];

  return <ActivityTimeline activities={mockActivities} />;
}
