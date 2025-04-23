import { useCallback, useEffect, useRef, useState } from "react";
import { UseScrollableListProps } from "./ScrollableList.types";

const useScrollableList = ({
  items,
  value,
  onChange,
}: UseScrollableListProps) => {
  const [currentIndex, setCurrentIndex] = useState(items.indexOf(value));
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const updateIndex = useCallback(
    (direction: number) => {
      const newIndex = (currentIndex + direction + items.length) % items.length;
      setCurrentIndex(newIndex);
      onChange(items[newIndex]);
    },
    [currentIndex, items, onChange]
  );

  const handleStart = useCallback((clientY: number) => {
    setIsDragging(true);
    setStartY(clientY);
  }, []);

  const handleMove = useCallback(
    (clientY: number) => {
      if (!isDragging) return;
      const diff = startY - clientY;
      const threshold = 20;

      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? 1 : -1;
        updateIndex(direction);
        setStartY(clientY);
      }
    },
    [isDragging, startY, updateIndex]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const element = listRef.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      updateIndex(direction);
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      handleStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      handleEnd();
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    element.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    element.addEventListener("touchmove", handleTouchMove, { passive: false });
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("wheel", handleWheel);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleEnd, handleMove, handleStart, updateIndex]);

  const getVisibleItems = () => {
    const visibleItems = [];
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;

    visibleItems.push(items[prevIndex]);
    visibleItems.push(items[currentIndex]);
    visibleItems.push(items[nextIndex]);

    return visibleItems;
  };

  return {
    listRef,
    currentIndex,
    setCurrentIndex,
    getVisibleItems,
    handleStart,
    handleMove,
    handleEnd,
  };
};

export default useScrollableList;
