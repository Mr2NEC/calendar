import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import {
  CalendarContextProps,
  CalendarContextReturn,
  CalendarMode,
  CalendarType,
} from "./Calendar.types";
import {
  CALENDAR_MODE_MAP,
  CALENDAR_TYPE_MAP,
  YEARS_PER_PAGE,
} from "./Calendar.constants";
import { useRange, useToggle } from "../../hooks";

interface CalendarProviderProps extends CalendarContextProps {
  children: ReactNode;
}

const CalendarContext = createContext<CalendarContextReturn | null>(null);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return context;
};

const CalendarProvider = ({
  children,
  onDateSelect,
  onRangeSelect,
  initialMode = CALENDAR_MODE_MAP.RANGE,
  initialDate = new Date(),
}: CalendarProviderProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarType, setCalendarType] = useState<CalendarType>(
    CALENDAR_TYPE_MAP.DAYS
  );

  const alternateVal =
    initialMode === CALENDAR_MODE_MAP.RANGE
      ? CALENDAR_MODE_MAP.SINGLE
      : CALENDAR_MODE_MAP.RANGE;

  const [mode, toggleMode] = useToggle<CalendarMode>(initialMode, alternateVal);

  const [range, setRange, setRangeStart, setRangeEnd, resetRange] =
    useRange<Date | null>();
  const [rangeStart, rangeEnd] = range;

  const getInitialTime = useCallback(() => {
    const start = new Date();
    start.setHours(0);
    start.setMinutes(0);
    const end = new Date();
    end.setHours(23);
    end.setMinutes(55);
    return {
      start,
      end,
    };
  }, []);

  const [time, , setTimeStart, setTimeEnd] = useRange<Date | null>(
    getInitialTime()
  );
  const [timeStart, timeEnd] = time;

  // const validateTime = useCallback(
  //   (date: Date) => {
  //     if (!timeStart || !timeEnd) {
  //       return true;
  //     }
  //     return (
  //       date.getTime() >= timeStart.getTime() &&
  //       date.getTime() <= timeEnd.getTime()
  //     );
  //   },
  //   [timeStart, timeEnd]
  // );

  const handleTimeStartChange = useCallback(
    (date: Date) => {
      setTimeStart(date);
    },
    [setTimeStart]
  );

  const handleTimeEndChange = useCallback(
    (date: Date) => {
      setTimeEnd(date);
    },
    [setTimeEnd]
  );

  const handleCalendarTypeChange = useCallback((calendarType: CalendarType) => {
    setCalendarType(calendarType);
  }, []);

  const goToNextMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }, []);

  const goToPrevMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }, []);

  const goToNextYears = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(newDate.getFullYear() + YEARS_PER_PAGE);
      return newDate;
    });
  }, []);

  const goToPrevYears = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(newDate.getFullYear() - YEARS_PER_PAGE);
      return newDate;
    });
  }, []);

  const selectCurrentDate = useCallback((date: Date) => {
    setCurrentDate(date);
  }, []);

  const handleDateSelect = useCallback(
    (date: Date) => {
      if (mode === CALENDAR_MODE_MAP.SINGLE) {
        if (rangeStart || rangeEnd) {
          resetRange();
        }
        setSelectedDate(date);
        onDateSelect?.(date);
      } else {
        if (selectedDate) {
          setSelectedDate(null);
        }
        if (!rangeStart || (rangeStart && rangeEnd)) {
          setRangeStart(date);
          setRangeEnd(null);
        } else {
          const start = rangeStart;
          const end = date;
          const [newStart, newEnd] = start > end ? [end, start] : [start, end];
          setRange({ start: newStart, end: newEnd });
          onRangeSelect?.(newStart, newEnd);
        }
      }
    },
    [
      mode,
      rangeStart,
      rangeEnd,
      selectedDate,
      onDateSelect,
      onRangeSelect,
      setRange,
      setRangeStart,
      setRangeEnd,
      resetRange,
    ]
  );

  const handleRangeSet = useCallback(
    (startDate: Date | null, endDate: Date | null) => {
      setRange({ start: startDate, end: endDate });
      onRangeSelect?.(startDate, endDate);
    },
    [onRangeSelect, setRange]
  );

  const goToToday = useCallback(() => {
    setCurrentDate(new Date());
    handleCalendarTypeChange(CALENDAR_TYPE_MAP.DAYS);
  }, [handleCalendarTypeChange]);

  const value: CalendarContextReturn = {
    currentDate,
    selectedDate,
    mode,
    rangeStart,
    rangeEnd,
    calendarType,
    timeStart,
    timeEnd,
    goToNext:
      calendarType === CALENDAR_TYPE_MAP.DAYS ? goToNextMonth : goToNextYears,
    goToPrev:
      calendarType === CALENDAR_TYPE_MAP.DAYS ? goToPrevMonth : goToPrevYears,
    goToToday,
    selectCurrentDate,
    toggleMode,
    setSelectedDate: handleDateSelect,
    setRange: handleRangeSet,
    onDateSelect,
    onRangeSelect,
    setCalendarType: handleCalendarTypeChange,
    handleTimeStartChange,
    handleTimeEndChange,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
