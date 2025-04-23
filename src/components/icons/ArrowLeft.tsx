import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16.18 3.269a1 1 0 00-1.415 0L8.121 9.913a3 3 0 00-.001 4.242l6.57 6.575a1 1 0 101.415-1.414l-6.573-6.572a1 1 0 010-1.414l6.648-6.647a1 1 0 000-1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoArrowLeft = React.memo(ArrowLeft);
export default MemoArrowLeft;
