import { ReactNode } from "react";
import { TIME_PICKER_TYPES } from "./TimePicker.constants";
import { Range } from "../../hooks";

export type TimePickerType =
  (typeof TIME_PICKER_TYPES)[keyof typeof TIME_PICKER_TYPES];

export interface TimePickerContextType {
  startTime: Date | null;
  endTime: Date | null;
  setStartTime: (time: Date) => void;
  setEndTime: (time: Date) => void;
  handleTimeChange: (
    type: TimePickerType,
    hour: number,
    minute: number
  ) => void;
  error: string | null;
  clearError: () => void;
}

export interface TimePickerProviderProps {
  children?: ReactNode;
  initialTime?: Range<Date>;
  onTimeChange?: (startTime: Date | null, endTime: Date | null) => void;
}
