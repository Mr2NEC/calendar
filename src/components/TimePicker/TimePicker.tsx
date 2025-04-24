import { memo } from "react";
import { clsx } from "clsx";
import { hours, minutes } from "./TimePicker.utils";
import useTimePicker from "./useTimePicker";
import styles from "./TimePicker.module.scss";
import ScrollableList from "../ScrollableList/ScrollableList";
import { TimePickerProps } from "./TimePicker.types";

const TimePicker = memo(
  ({ className, initialTime, onTimeChange }: TimePickerProps) => {
    const { time, handleHourChange, handleMinuteChange } = useTimePicker({
      initialTime,
      onTimeChange,
    });

    return (
      <div className={clsx(styles["time-picker"], className)}>
        <div className={styles["time-picker-content"]}>
          <div className={styles["time-picker-section"]}>
            <div className={styles["time-picker-inputs"]}>
              <ScrollableList
                items={hours}
                value={time?.getHours() ?? 0}
                onChange={(hour) => handleHourChange(hour)}
              />
              <span className={styles["time-picker-separator"]}>:</span>
              <ScrollableList
                items={minutes}
                value={time?.getMinutes() ?? 0}
                onChange={(minute) => handleMinuteChange(minute)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default TimePicker;
