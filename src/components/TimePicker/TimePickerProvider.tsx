import { createContext, useContext, useState, useCallback } from "react";
import { useRange } from "../../hooks";
import {
  TimePickerContextType,
  TimePickerProviderProps,
  TimePickerType,
} from "./TimePicker.types";
import { TIME_PICKER_TYPES } from "./TimePicker.constants";

const TimePickerContext = createContext<TimePickerContextType | null>(null);

const TimePickerProvider = ({
  children,
  initialTime,
  onTimeChange,
}: TimePickerProviderProps) => {
  const [timeRange, , setStartTime, setEndTime] = useRange<Date>(initialTime);
  const [startTime, endTime] = timeRange;

  const [error, setError] = useState<string | null>(null);

  const validateTimes = useCallback(
    (newStartTime: Date | null, newEndTime: Date | null) => {
      if (!newStartTime || !newEndTime) return true;

      const start = newStartTime.getTime();
      const end = newEndTime.getTime();

      if (start > end) {
        setError("Start time cannot be after end time");
        return false;
      }

      setError(null);
      return true;
    },
    []
  );

  const handleStartTimeChange = useCallback(
    (newTime: Date) => {
      if (validateTimes(newTime, endTime)) {
        setStartTime(newTime);
        onTimeChange?.(newTime, endTime);
      }
    },
    [endTime, onTimeChange, validateTimes]
  );

  const handleEndTimeChange = useCallback(
    (newTime: Date) => {
      if (validateTimes(startTime, newTime)) {
        setEndTime(newTime);
        onTimeChange?.(startTime, newTime);
      }
    },
    [startTime, onTimeChange, validateTimes]
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleTimeChange = useCallback(
    (type: TimePickerType, hour: number, minute: number) => {
      clearError();
      const newTime = new Date();
      newTime.setHours(hour);
      newTime.setMinutes(minute);
      newTime.setSeconds(0);
      newTime.setMilliseconds(0);

      if (type === TIME_PICKER_TYPES.START) {
        setStartTime(newTime);
      } else {
        setEndTime(newTime);
      }
    },
    [setStartTime, setEndTime, clearError]
  );

  const value = {
    startTime,
    endTime,
    setStartTime: handleStartTimeChange,
    setEndTime: handleEndTimeChange,
    handleTimeChange,
    error,
    clearError,
  };

  return (
    <TimePickerContext.Provider value={value}>
      {children}
    </TimePickerContext.Provider>
  );
};

export const useTimePicker = () => {
  const context = useContext(TimePickerContext);
  if (!context) {
    throw new Error("useTimePicker must be used within a TimePickerProvider");
  }
  return context;
};

export default TimePickerProvider;
