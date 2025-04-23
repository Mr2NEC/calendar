import { useState, useCallback } from "react";

export type UseToggleReturn<T> = [T, () => void, () => void, () => void];

const useToggle = <T = boolean>(
  defaultValue?: T,
  alternateValue?: T
): UseToggleReturn<T> => {
  const defaultVal = defaultValue !== undefined ? defaultValue : (false as T);
  const alternateVal =
    alternateValue !== undefined ? alternateValue : (true as T);

  const [state, setState] = useState<T>(defaultVal);

  const toggle = useCallback(() => {
    setState((prev) => (prev === defaultVal ? alternateVal : defaultVal));
  }, [defaultVal, alternateVal]);

  const setToDefault = useCallback(() => {
    setState(defaultVal);
  }, [defaultVal]);

  const setToAlternate = useCallback(() => {
    setState(alternateVal);
  }, [alternateVal]);

  return [state, toggle, setToDefault, setToAlternate];
};

export default useToggle;
