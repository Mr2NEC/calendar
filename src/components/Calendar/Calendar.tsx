import { memo, useCallback, useMemo } from "react";
import { clsx } from "clsx";
import {
  CALENDAR_MODE_MAP,
  CALENDAR_TYPE_MAP,
  DATE_FORMAT_TEMPLATE,
} from "./Calendar.constants";
import { useCalendarContext } from "./CalendarProvider";

import { CalendarProps } from "./Calendar.types";
import { CircleIconButton } from "../Button";
import {
  ArrowLeft,
  ArrowRight,
  CalendarToday,
  DateRange,
  Check,
  SingleRange,
} from "../icons";
import { Button } from "../Button";
import CalendarDays from "./CalendarDays";
import CalendarMonths from "./CalendarMonths";
import CalendarYears from "./CalendarYears";
import { TimePicker } from "../TimePicker";
import styles from "./Calendar.module.scss";
const Calendar = ({ className, children }: CalendarProps) => {
  return <div className={clsx(styles.calendar, className)}>{children}</div>;
};

Calendar.Header = memo(() => {
  const { goToPrev, goToNext, currentDate, setCalendarType, calendarType } =
    useCalendarContext();

  const isTimePicker =
    calendarType === CALENDAR_TYPE_MAP.TIME_START ||
    calendarType === CALENDAR_TYPE_MAP.TIME_END;

  return (
    <div className={styles["calendar-header"]}>
      <div className={styles["calendar-header-content"]}>
        <CircleIconButton
          disabled={calendarType === CALENDAR_TYPE_MAP.MONTHS || isTimePicker}
          variant="outline"
          icon={<ArrowLeft />}
          aria-label="Previous month"
          onClick={goToPrev}
        />
        <div className={styles["calendar-header-content-buttons"]}>
          <Button
            variant="secondary"
            disabled={calendarType === CALENDAR_TYPE_MAP.MONTHS}
            onClick={() => setCalendarType(CALENDAR_TYPE_MAP.MONTHS)}
          >
            {currentDate.toLocaleString("en", {
              month: "long",
            })}
          </Button>
          <Button
            variant="secondary"
            disabled={calendarType === CALENDAR_TYPE_MAP.YEARS}
            onClick={() => setCalendarType(CALENDAR_TYPE_MAP.YEARS)}
          >
            {currentDate.toLocaleString("en", {
              year: "numeric",
            })}
          </Button>
          <Calendar.SettingsButtons />
        </div>

        <CircleIconButton
          disabled={calendarType === CALENDAR_TYPE_MAP.MONTHS || isTimePicker}
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
      {(calendarType === CALENDAR_TYPE_MAP.TIME_START ||
        calendarType === CALENDAR_TYPE_MAP.TIME_END) && <Calendar.TimePicker />}
    </div>
  );
});

Calendar.Footer = memo(() => {
  return (
    <div className={styles["calendar-footer"]}>
      <Calendar.TimePickerButtons />
    </div>
  );
});

Calendar.TimePicker = memo(() => {
  const {
    calendarType,
    timeStart,
    timeEnd,
    handleTimeStartChange,
    handleTimeEndChange,
  } = useCalendarContext();

  const currentTime = useMemo(() => {
    return calendarType === CALENDAR_TYPE_MAP.TIME_START ? timeStart : timeEnd;
  }, [calendarType, timeStart, timeEnd]);

  const onTimeChange = useCallback(
    (time: Date) => {
      if (calendarType === CALENDAR_TYPE_MAP.TIME_START) {
        handleTimeStartChange(time);
      } else {
        handleTimeEndChange(time);
      }
    },
    [calendarType, handleTimeStartChange, handleTimeEndChange]
  );

  return (
    <div className={styles["calendar-time-picker"]}>
      <TimePicker
        key={calendarType}
        initialTime={currentTime}
        onTimeChange={onTimeChange}
      />
    </div>
  );
});

Calendar.TimePickerButtons = memo(() => {
  const {
    selectedDate,
    rangeStart,
    rangeEnd,
    timeStart,
    timeEnd,
    calendarType,
    mode,
    setCalendarType,
  } = useCalendarContext();

  const isTimeStart = calendarType === CALENDAR_TYPE_MAP.TIME_START;
  const isTimeEnd = calendarType === CALENDAR_TYPE_MAP.TIME_END;

  const onSubmitTime = useCallback(() => {
    if (isTimeStart) {
      setCalendarType(CALENDAR_TYPE_MAP.TIME_END);
    } else {
      setCalendarType(CALENDAR_TYPE_MAP.DAYS);
    }
  }, [calendarType, setCalendarType]);

  return (
    <div className={styles["calendar-time-picker-buttons"]}>
      <div className={styles["calendar-time-picker-buttons-button"]}>
        <span>
          {(mode === CALENDAR_MODE_MAP.SINGLE
            ? selectedDate
            : rangeStart
          )?.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) ?? DATE_FORMAT_TEMPLATE}
        </span>
        <Button
          variant="outline"
          disabled={isTimeStart}
          onClick={() => setCalendarType(CALENDAR_TYPE_MAP.TIME_START)}
          aria-label="Edit start time"
        >
          {timeStart?.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Button>
      </div>
      <span>-</span>
      <div className={styles["calendar-time-picker-buttons-button"]}>
        <span>
          {(mode === CALENDAR_MODE_MAP.SINGLE
            ? selectedDate
            : rangeEnd
          )?.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) ?? DATE_FORMAT_TEMPLATE}
        </span>
        <Button
          variant="outline"
          disabled={isTimeEnd}
          onClick={() => setCalendarType(CALENDAR_TYPE_MAP.TIME_END)}
          aria-label="Edit end time"
        >
          {timeEnd?.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Button>
      </div>
      <CircleIconButton
        disabled={!isTimeStart && !isTimeEnd}
        variant="outline"
        onClick={onSubmitTime}
        icon={<Check />}
        aria-label="Set time"
      />
    </div>
  );
});

Calendar.SettingsButtons = memo(() => {
  const { goToToday, toggleMode, mode } = useCalendarContext();

  return (
    <div className={styles["calendar-settings-buttons"]}>
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
