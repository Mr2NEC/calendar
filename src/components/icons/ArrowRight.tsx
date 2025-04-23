import * as React from "react";

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.82 20.731a1 1 0 001.415 0l6.644-6.644a3 3 0 00.001-4.242L9.31 3.27a1 1 0 10-1.415 1.414l6.572 6.572a1 1 0 010 1.414l-6.646 6.647a1 1 0 000 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoArrowRight = React.memo(ArrowRight);
export default MemoArrowRight;
