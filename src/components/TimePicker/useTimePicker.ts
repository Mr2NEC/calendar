import { useCallback, useState } from "react";
import {
  UseTimePickerProps,
  UseTimePickerReturnType,
} from "./TimePicker.types";

const useTimePicker = ({
  initialTime,
  onTimeChange,
}: UseTimePickerProps): UseTimePickerReturnType => {
  const [time, setTime] = useState<Date>(initialTime || new Date());

  const handleHourChange = useCallback(
    (hour: number) => {
      const newTime = new Date(time);
      newTime.setHours(hour);
      setTime(newTime);
      onTimeChange?.(newTime);
    },
    [time, onTimeChange]
  );

  const handleMinuteChange = useCallback(
    (minute: number) => {
      const newTime = new Date(time);
      newTime.setMinutes(minute);
      setTime(newTime);
      onTimeChange?.(newTime);
    },
    [time, onTimeChange]
  );

  return {
    time,
    handleHourChange,
    handleMinuteChange,
  };
};

export default useTimePicker;
