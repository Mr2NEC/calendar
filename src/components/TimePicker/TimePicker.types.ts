export interface UseTimePickerReturnType {
  time: Date | null;
  handleHourChange: (hour: number) => void;
  handleMinuteChange: (minute: number) => void;
}

export interface UseTimePickerProps {
  initialTime?: Date | null;
  onTimeChange?: (time: Date) => void;
}

export interface TimePickerProps extends UseTimePickerProps {
  className?: string;
}
