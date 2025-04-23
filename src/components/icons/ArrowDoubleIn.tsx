import * as React from "react";

function ArrowDoubleIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.586 7.757A1 1 0 105.17 9.171L7 11H1.829a1 1 0 000 2H7l-1.828 1.828a1 1 0 101.414 1.415l2.828-2.829a2 2 0 000-2.828L6.586 7.757zM17.414 16.243a1 1 0 001.414-1.414L17 13h5.172a1 1 0 100-2H17l1.828-1.828a1 1 0 10-1.414-1.415l-2.828 2.829a2 2 0 000 2.828l2.828 2.829z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoArrowDoubleIn = React.memo(ArrowDoubleIn);
export default MemoArrowDoubleIn;
