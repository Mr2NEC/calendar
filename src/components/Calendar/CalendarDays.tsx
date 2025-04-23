import { generateCalendarMonth } from "./Calendar.utils";
import { useCalendarContext } from "./CalendarProvider";
import styles from "./Calendar.module.scss";
import clsx from "clsx";
import { DAYS_OF_WEEK_MAP } from "./Calendar.constants";
import { useMemo } from "react";

function CalendarDays() {
  const { currentDate, selectedDate, rangeStart, rangeEnd, setSelectedDate } =
    useCalendarContext();

  const month = useMemo(
    () =>
      generateCalendarMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        selectedDate,
        rangeStart,
        rangeEnd
      ),
    [currentDate, selectedDate, rangeStart, rangeEnd]
  );

  const days = useMemo(() => Object.keys(DAYS_OF_WEEK_MAP), []);

  return (
    <div className={clsx(styles["calendar-body-grid"], styles.days)}>
      {days.map((day) => (
        <div key={day} className={styles["calendar-weekday"]}>
          {day}
        </div>
      ))}
      {month.days.map((day, index) => (
        <div
          key={index}
          className={clsx(
            styles["calendar-day"],
            !day.isCurrentMonth && styles["calendar-day-other-month"],
            day.isToday && styles["calendar-day-today"],
            day.isSelected && styles["calendar-day-selected"],
            day.isInRange && styles["calendar-day-in-range"],
            day.isRangeStart && styles["calendar-day-range-start"],
            day.isRangeEnd && styles["calendar-day-range-end"]
          )}
          onClick={() => setSelectedDate(day.date)}
        >
          {day.date.getDate()}
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;
