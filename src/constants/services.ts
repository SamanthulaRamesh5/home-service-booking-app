export type Service = {
  id: string;
  title: string;
  icon: string;
};

export const SERVICES: Service[] = [
  { id: 'plumber', title: 'Plumber', icon: '🚰' },
  { id: 'electrician', title: 'Electrician', icon: '💡' },
  { id: 'cleaner', title: 'Cleaning', icon: '🧹' },
  { id: 'carpenter', title: 'Carpenter', icon: '🪚' },
  { id: 'ac', title: 'AC Repair', icon: '❄️' },
];
