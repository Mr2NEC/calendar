import React from "react";
import clsx from "clsx";
import { Button } from "./Button";
import styles from "./Button.module.scss";
import { CircleIconButtonProps } from "./Button.types";

const CircleIconButton = React.forwardRef<
  HTMLButtonElement,
  CircleIconButtonProps
>(({ icon, className = "", ...props }, ref) => {
  return (
    <Button
      ref={ref}
      size="icon"
      className={clsx(styles["button--circle"], className)}
      {...props}
    >
      {icon}
    </Button>
  );
});

export { CircleIconButton };
