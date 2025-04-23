import { useEffect } from "react";

export interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

export default function useClickOutside({
  ref,
  callback,
}: UseClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
