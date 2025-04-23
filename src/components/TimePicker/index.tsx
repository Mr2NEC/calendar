import TimePickerProvider from "./TimePickerProvider";
import TimePicker from "./TimePicker";
import { TimePickerProviderProps } from "./TimePicker.types";

const TimePickerComponent = ({
  children,
  initialTime,
  onTimeChange,
}: TimePickerProviderProps) => {
  return (
    <TimePickerProvider initialTime={initialTime} onTimeChange={onTimeChange}>
      {children || <TimePicker />}
    </TimePickerProvider>
  );
};

export default TimePickerComponent;
