import { memo } from "react";
import { clsx } from "clsx";
import { CALENDAR_MODE_MAP, CALENDAR_TYPE_MAP } from "./Calendar.constants";
import { useCalendarContext } from "./CalendarProvider";
import styles from "./Calendar.module.scss";
import { CalendarProps } from "./Calendar.types";
import { CircleIconButton } from "../Button";
import {
  ArrowLeft,
  ArrowRight,
  CalendarToday,
  DateRange,
  SingleRange,
  Time,
} from "../icons";
import { Button } from "../Button";
import CalendarDays from "./CalendarDays";
import CalendarMonths from "./CalendarMonths";
import CalendarYears from "./CalendarYears";
import TimePicker from "../TimePicker";

const Calendar = ({ className, children }: CalendarProps) => {
  return <div className={clsx(styles.calendar, className)}>{children}</div>;
};

Calendar.Header = memo(() => {
  const { goToPrev, goToNext, currentDate, setCalendarType, calendarType } =
    useCalendarContext();

  return (
    <div className={styles["calendar-header"]}>
      <div className={styles["calendar-header-content"]}>
        <CircleIconButton
          disabled={
            calendarType === CALENDAR_TYPE_MAP.MONTHS ||
            calendarType === CALENDAR_TYPE_MAP.TIME
          }
          variant="outline"
          icon={<ArrowLeft />}
          aria-label="Previous month"
          onClick={goToPrev}
        />
        <div className={styles["calendar-header-content-buttons"]}>
          <Button
            variant="secondary"
            onClick={() => setCalendarType(CALENDAR_TYPE_MAP.MONTHS)}
          >
            {currentDate.toLocaleString("en", {
              month: "long",
            })}
          </Button>
          <Button
            variant="secondary"
            onClick={() => setCalendarType(CALENDAR_TYPE_MAP.YEARS)}
          >
            {currentDate.toLocaleString("en", {
              year: "numeric",
            })}
          </Button>
        </div>

        <CircleIconButton
          disabled={
            calendarType === CALENDAR_TYPE_MAP.MONTHS ||
            calendarType === CALENDAR_TYPE_MAP.TIME
          }
          variant="outline"
          icon={<ArrowRight />}
          aria-label="Next month"
          onClick={goToNext}
        />
      </div>
    </div>
  );
});

Calendar.Body = memo(() => {
  const { calendarType } = useCalendarContext();
  return (
    <div className={styles["calendar-body"]}>
      {calendarType === CALENDAR_TYPE_MAP.DAYS && <CalendarDays />}
      {calendarType === CALENDAR_TYPE_MAP.MONTHS && <CalendarMonths />}
      {calendarType === CALENDAR_TYPE_MAP.YEARS && <CalendarYears />}
      {calendarType === CALENDAR_TYPE_MAP.TIME && <TimePicker />}
    </div>
  );
});

Calendar.Footer = memo(() => {
  const { setCalendarType, goToToday, toggleMode, mode } = useCalendarContext();

  return (
    <div className={styles["calendar-footer"]}>
      <CircleIconButton
        variant="outline"
        onClick={() => setCalendarType(CALENDAR_TYPE_MAP.TIME)}
        icon={<Time />}
        aria-label="Set time"
      />
      <CircleIconButton
        variant="outline"
        onClick={goToToday}
        icon={<CalendarToday />}
        aria-label="Go to today"
      />
      <CircleIconButton
        variant="outline"
        onClick={toggleMode}
        icon={
          mode === CALENDAR_MODE_MAP.SINGLE ? <DateRange /> : <SingleRange />
        }
        aria-label={
          mode === CALENDAR_MODE_MAP.SINGLE
            ? "Toggle range mode"
            : "Toggle single mode"
        }
      />
    </div>
  );
});

export default Calendar;
