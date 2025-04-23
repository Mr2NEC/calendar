import * as React from "react";

function ArrowDoubleOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18.343 16.243a1 1 0 001.414 0l2.829-2.829a2 2 0 000-2.828l-2.829-2.829a1 1 0 10-1.414 1.415L20.172 11H15a1 1 0 100 2h5.172l-1.829 1.829a1 1 0 000 1.414zM5.657 7.758a1 1 0 00-1.414 0l-2.829 2.828a2 2 0 000 2.828l2.829 2.829a1 1 0 001.414-1.414L3.828 13H9a1 1 0 100-2H3.829l1.828-1.828a1 1 0 000-1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoArrowDoubleOut = React.memo(ArrowDoubleOut);
export default MemoArrowDoubleOut;
