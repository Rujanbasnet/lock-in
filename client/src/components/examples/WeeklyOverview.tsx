import { WeeklyOverview } from '../WeeklyOverview';

export default function WeeklyOverviewExample() {
  const mockData = [
    { day: 'Mon', minutes: 240 },
    { day: 'Tue', minutes: 300 },
    { day: 'Wed', minutes: 180 },
    { day: 'Thu', minutes: 270 },
    { day: 'Fri', minutes: 210 },
    { day: 'Sat', minutes: 150 },
    { day: 'Sun', minutes: 120 },
  ];

  return <WeeklyOverview data={mockData} />;
}
