import { memo } from "react";
import { clsx } from "clsx";
import { useCalendarContext } from "./CalendarProvider";
import styles from "./Calendar.module.scss";
import {
  YEARS_PER_PAGE,
  YEARS_RANGE,
  CALENDAR_TYPE_MAP,
} from "./Calendar.constants";

const CalendarYears = memo(() => {
  const { currentDate, selectedDate, selectCurrentDate, setCalendarType } =
    useCalendarContext();
  const currentYear = currentDate.getFullYear();
  const selectedYear = selectedDate?.getFullYear() ?? -1;

  const startYear = currentYear - YEARS_RANGE;
  const years = Array.from({ length: YEARS_PER_PAGE }, (_, i) => startYear + i);

  const handleYearClick = (year: number) => {
    const newDate = new Date(year, currentDate.getMonth(), 1);
    selectCurrentDate(newDate);
    setCalendarType(CALENDAR_TYPE_MAP.MONTHS);
  };

  return (
    <div className={clsx(styles["calendar-body-grid"], styles.years)}>
      {years.map((year) => {
        const isCurrentYear = year === currentYear;
        const isSelected = year === selectedYear;

        return (
          <button
            key={year}
            className={clsx(
              styles["calendar-day"],
              isCurrentYear && styles["calendar-day-today"],
              isSelected && styles["calendar-day-selected"]
            )}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
});

CalendarYears.displayName = "CalendarYears";

export default CalendarYears;
