import * as React from "react";

function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18.293 15.29a1 1 0 000-1.415L13.4 8.988a2 2 0 00-2.828 0l-4.89 4.89a1 1 0 101.414 1.415l4.185-4.186a1 1 0 011.415 0l4.182 4.182a1 1 0 001.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoArrowUp = React.memo(ArrowUp);
export default MemoArrowUp;
