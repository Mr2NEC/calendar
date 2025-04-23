import { CalendarDay, CalendarMonth } from "./Calendar.types";

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isInRange = (
  date: Date,
  startDate: Date | null,
  endDate: Date | null
): boolean => {
  if (!startDate || !endDate) return false;
  return date >= startDate && date <= endDate;
};

export const generateCalendarMonth = (
  year: number,
  month: number,
  selectedDate: Date | null,
  rangeStart: Date | null = null,
  rangeEnd: Date | null = null
): CalendarMonth => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const days: CalendarDay[] = [];

  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthDays - i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      isInRange: isInRange(date, rangeStart, rangeEnd),
      isRangeStart: rangeStart ? isSameDay(date, rangeStart) : false,
      isRangeEnd: rangeEnd ? isSameDay(date, rangeEnd) : false,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      isInRange: isInRange(date, rangeStart, rangeEnd),
      isRangeStart: rangeStart ? isSameDay(date, rangeStart) : false,
      isRangeEnd: rangeEnd ? isSameDay(date, rangeEnd) : false,
    });
  }

  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      isInRange: isInRange(date, rangeStart, rangeEnd),
      isRangeStart: rangeStart ? isSameDay(date, rangeStart) : false,
      isRangeEnd: rangeEnd ? isSameDay(date, rangeEnd) : false,
    });
  }

  return {
    year,
    month,
    days,
  };
};
