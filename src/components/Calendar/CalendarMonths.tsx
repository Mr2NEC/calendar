import { memo } from "react";
import { clsx } from "clsx";
import { useCalendarContext } from "./CalendarProvider";
import styles from "./Calendar.module.scss";
import { MONTHS_MAP, CALENDAR_TYPE_MAP } from "./Calendar.constants";

const CalendarMonths = memo(() => {
  const { currentDate, selectedDate, selectCurrentDate, setCalendarType } =
    useCalendarContext();
  const currentYear = currentDate.getFullYear();
  const selectedMonth = selectedDate?.getMonth() ?? -1;

  const handleMonthClick = (month: number) => {
    const newDate = new Date(currentYear, month, 1);
    selectCurrentDate(newDate);
    setCalendarType(CALENDAR_TYPE_MAP.DAYS);
  };

  return (
    <div className={clsx(styles["calendar-body-grid"], styles.months)}>
      {Object.entries(MONTHS_MAP).map(([key, month]) => {
        const monthIndex = Object.keys(MONTHS_MAP).indexOf(key);
        const isCurrentMonth = monthIndex === currentDate.getMonth();
        const isSelected = monthIndex === selectedMonth;

        return (
          <button
            key={key}
            className={clsx(
              styles["calendar-day"],
              isCurrentMonth && styles["calendar-day-today"],
              isSelected && styles["calendar-day-selected"]
            )}
            onClick={() => handleMonthClick(monthIndex)}
          >
            {month}
          </button>
        );
      })}
    </div>
  );
});

export default CalendarMonths;
