import { useState, useCallback } from "react";

export type Range<T> = {
  start: T | null;
  end: T | null;
};

export type UseRangeReturn<T> = [
  [Range<T>["start"], Range<T>["end"]],
  (range: Range<T>) => void,
  (start: T) => void,
  (end: T) => void,
  () => void
];

const useRange = <T>(
  initialRange: Range<T> = { start: null, end: null } as Range<T>
): UseRangeReturn<T> => {
  const [range, setRange] = useState<Range<T>>(initialRange);

  const setStart = useCallback((start: T) => {
    setRange(
      (prev) =>
        ({
          ...prev,
          start,
        } as Range<T>)
    );
  }, []);

  const setEnd = useCallback((end: T) => {
    setRange(
      (prev) =>
        ({
          ...prev,
          end,
        } as Range<T>)
    );
  }, []);

  const resetRange = useCallback(() => {
    setRange(initialRange);
  }, [initialRange]);

  return [[range.start, range.end], setRange, setStart, setEnd, resetRange];
};

export default useRange;
