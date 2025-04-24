import Calendar from "./Calendar";
import { CalendarProps } from "./Calendar.types";
import CalendarProvider from "./CalendarProvider";

const CalendarComponent = ({
  children,
  className,
  ...props
}: CalendarProps) => {
  return (
    <CalendarProvider {...props}>
      <Calendar className={className}>
        {children || (
          <>
            <Calendar.Header />
            <Calendar.Body />
            <Calendar.Footer />
          </>
        )}
      </Calendar>
    </CalendarProvider>
  );
};

export default CalendarComponent;
