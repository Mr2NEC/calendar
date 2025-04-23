import { ScrollableListProps } from "./ScrollableList.types";
import clsx from "clsx";
import styles from "./ScrollableList.module.scss";
import useScrollableList from "./useScrollableList";

const ScrollableList = ({
  items,
  value,
  onChange,
  className,
}: ScrollableListProps) => {
  const {
    listRef,
    setCurrentIndex,
    getVisibleItems,
    handleStart,
    handleMove,
    handleEnd,
  } = useScrollableList({ items, value, onChange });

  return (
    <div
      ref={listRef}
      className={clsx(styles["scrollable-list"], className)}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseMove={(e) => handleMove(e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div className={styles["scrollable-list-content"]}>
        {getVisibleItems().map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={clsx(styles["scrollable-list-item"], {
              [styles["selected"]]: item === value,
              [styles["prev"]]: index === 0,
              [styles["next"]]: index === 2,
            })}
            onClick={() => {
              const newIndex = items.indexOf(item);
              setCurrentIndex(newIndex);
              onChange(item);
            }}
          >
            {item.toString().padStart(2, "0")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableList;
