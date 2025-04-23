import * as React from "react";

function DateRange(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 10V7a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9m16 0H4m4-7v4m8-4v4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <rect x={6} y={12} width={3} height={3} rx={0.5} fill="currentColor" />
      <rect x={10.5} y={12} width={3} height={3} rx={0.5} fill="currentColor" />
      <rect x={15} y={12} width={3} height={3} rx={0.5} fill="currentColor" />
    </svg>
  );
}

const MemoDateRange = React.memo(DateRange);
export default MemoDateRange;
