export const useCalendarAppointmentTime = (timeInterval: string) => {
  const times = timeInterval.split('-');
  const [[startHour, startMinute], [endHour, endMinute]] = times.map((time) =>
    time.split(':').map((item) => +item),
  );
  const startTimeInMinutes = startHour * 60 + startMinute;
  const totalTimeInMinutes =
    60 * (endHour - startHour) + (endMinute - startMinute);

  return {startTimeInMinutes, totalTimeInMinutes};
};
