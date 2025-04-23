import * as React from "react";

function Time(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3.007 12a8.993 8.993 0 1017.986 0 8.993 8.993 0 00-17.986 0z"
        fill="currentColor"
      />
      <path
        d="M12 5a1 1 0 00-1 1v6.467s0 .26.127.457c.084.166.217.31.39.41l4.62 2.668a1 1 0 001-1.732L13 11.88V6a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoTime = React.memo(Time);
export default MemoTime;
