import { ReactNode } from "react";
import {
  CALENDAR_MODE_MAP,
  CALENDAR_TYPE_MAP,
  DAYS_OF_WEEK_MAP,
  MONTHS_MAP,
} from "./Calendar.constants";

export interface CalendarContextProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  onRangeSelect?: (startDate: Date | null, endDate: Date | null) => void;
  initialMode?: CalendarMode;
  initialRange?: { start: Date; end: Date };
}

export interface CalendarContextReturn {
  currentDate: Date;
  selectedDate: Date | null;
  mode: CalendarMode;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  timeStart: Date | null;
  timeEnd: Date | null;
  goToNext: () => void;
  goToPrev: () => void;
  goToToday: () => void;
  selectCurrentDate: (date: Date) => void;
  toggleMode: () => void;
  setSelectedDate: (date: Date) => void;
  setRange: (startDate: Date | null, endDate: Date | null) => void;
  onDateSelect?: (date: Date) => void;
  onRangeSelect?: (startDate: Date | null, endDate: Date | null) => void;
  calendarType: CalendarType;
  setCalendarType: (calendarType: CalendarType) => void;
  handleTimeStartChange: (date: Date) => void;
  handleTimeEndChange: (date: Date) => void;
}

export interface CalendarProps extends CalendarContextProps {
  children?: ReactNode;
  className?: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
}

export interface CalendarMonth {
  year: number;
  month: number;
  days: CalendarDay[];
}

export interface CalendarYear {
  year: number;
  isCurrentYear: boolean;
  isSelected: boolean;
}

export interface CalendarContextType {
  currentDate: Date;
  selectedDate: Date | null;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  setSelectedDate: (date: Date) => void;
  setRange: (startDate: Date | null, endDate: Date | null) => void;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  goToToday: () => void;
  onDateSelect?: (date: Date) => void;
  onRangeSelect?: (startDate: Date | null, endDate: Date | null) => void;
  mode: "single" | "range";
}

export type CalendarDayKey = keyof typeof DAYS_OF_WEEK_MAP;
export type CalendarDayType = (typeof DAYS_OF_WEEK_MAP)[CalendarDayKey];

export type CalendarMonthKey = keyof typeof MONTHS_MAP;
export type CalendarMonthType = (typeof MONTHS_MAP)[CalendarMonthKey];

export type CalendarMode =
  (typeof CALENDAR_MODE_MAP)[keyof typeof CALENDAR_MODE_MAP];

export type CalendarType =
  (typeof CALENDAR_TYPE_MAP)[keyof typeof CALENDAR_TYPE_MAP];
