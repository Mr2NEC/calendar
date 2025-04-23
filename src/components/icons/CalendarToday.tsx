import * as React from "react";

function CalendarToday(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="transparent" d="M0 0h24v24H0z" />
      <g filter="url(#prefix__filter0_d_15_286)">
        <path
          d="M3 8.267V19a1 1 0 001 1h16a1 1 0 001-1V8.267m-18 0V5a1 1 0 011-1h16a1 1 0 011 1v3.267m-18 0h18"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#prefix__filter1_d_15_286)">
        <circle
          cx={12}
          cy={14}
          r={2}
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#prefix__filter2_d_15_286)">
        <path
          d="M7 2v3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#prefix__filter3_d_15_286)">
        <path
          d="M17 2v3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_15_286"
          x={1.5}
          y={3.5}
          width={21}
          height={19}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_286"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_15_286"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_d_15_286"
          x={8.5}
          y={11.5}
          width={7}
          height={7}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_286"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_15_286"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter2_d_15_286"
          x={5.5}
          y={1.5}
          width={3}
          height={6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_286"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_15_286"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter3_d_15_286"
          x={15.5}
          y={1.5}
          width={3}
          height={6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_286"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_15_286"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoCalendarToday = React.memo(CalendarToday);
export default MemoCalendarToday;
