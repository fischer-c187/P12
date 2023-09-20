export function mapDayToInitial(dayNumber) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  return days[dayNumber - 1];
}
