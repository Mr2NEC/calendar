export interface UseScrollableListProps {
  items: number[];
  value: number;
  onChange: (value: number) => void;
}

export interface ScrollableListProps extends UseScrollableListProps {
  className?: string;
}
