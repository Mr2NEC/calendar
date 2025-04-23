import { memo } from "react";
import { clsx } from "clsx";
import { hours, minutes } from "./TimePicker.utils";
import { useTimePicker } from "./TimePickerProvider";
import styles from "./TimePicker.module.scss";
import { TIME_PICKER_TYPES } from "./TimePicker.constants";
import ScrollableList from "../ScrollableList/ScrollableList";

interface TimePickerProps {
  className?: string;
  label?: string;
  required?: boolean;
}

const TimePicker = memo(({ className, label, required }: TimePickerProps) => {
  const { startTime, endTime, handleTimeChange, error } = useTimePicker();

  return (
    <div className={clsx(styles["time-picker"], className)}>
      {label && (
        <div className={styles["time-picker-header"]}>
          <label className={styles["time-picker-label"]}>
            {label}
            {required && <span className={styles["required"]}>*</span>}
          </label>
        </div>
      )}

      <div className={styles["time-picker-content"]}>
        <div className={styles["time-picker-section"]}>
          <div className={styles["time-picker-label"]}>Start Time</div>
          <div className={styles["time-picker-inputs"]}>
            <ScrollableList
              items={hours}
              value={startTime?.getHours() || 0}
              onChange={(hour) =>
                handleTimeChange(
                  TIME_PICKER_TYPES.START,
                  hour,
                  startTime?.getMinutes() || 0
                )
              }
              className={clsx({ [styles["error"]]: error })}
            />
            <span className={styles["time-picker-separator"]}>:</span>
            <ScrollableList
              items={minutes}
              value={startTime?.getMinutes() || 0}
              onChange={(minute) =>
                handleTimeChange(
                  TIME_PICKER_TYPES.START,
                  startTime?.getHours() || 0,
                  minute
                )
              }
              className={clsx({ [styles["error"]]: error })}
            />
          </div>
        </div>

        <div className={styles["time-picker-section"]}>
          <div className={styles["time-picker-label"]}>End Time</div>
          <div className={styles["time-picker-inputs"]}>
            <ScrollableList
              items={hours}
              value={endTime?.getHours() || 0}
              onChange={(hour) =>
                handleTimeChange(
                  TIME_PICKER_TYPES.END,
                  hour,
                  endTime?.getMinutes() || 0
                )
              }
              className={clsx({ [styles["error"]]: error })}
            />
            <span className={styles["time-picker-separator"]}>:</span>
            <ScrollableList
              items={minutes}
              value={endTime?.getMinutes() || 0}
              onChange={(minute) =>
                handleTimeChange(
                  TIME_PICKER_TYPES.END,
                  endTime?.getHours() || 0,
                  minute
                )
              }
              className={clsx({ [styles["error"]]: error })}
            />
          </div>
        </div>
      </div>

      {error && <div className={styles["error-message"]}>{error}</div>}
    </div>
  );
});

export default TimePicker;
