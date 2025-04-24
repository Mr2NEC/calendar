import * as React from "react";

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22.705 4.954a1 1 0 00-1.414 0L8.727 17.518a1 1 0 01-1.414 0l-4.599-4.599A1 1 0 101.3 14.333l4.604 4.596a3 3 0 004.24-.002l12.56-12.559a1 1 0 000-1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoCheck = React.memo(Check);
export default MemoCheck;
