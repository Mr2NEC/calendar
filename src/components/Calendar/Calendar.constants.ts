export const DAYS_OF_WEEK_MAP = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
} as const;

export const MONTHS_MAP = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
} as const;

export const CALENDAR_MODE_MAP = {
  SINGLE: "single",
  RANGE: "range",
} as const;

export const CALENDAR_TYPE_MAP = {
  DAYS: "days",
  MONTHS: "months",
  YEARS: "years",
  TIME_START: "time-start",
  TIME_END: "time-end",
} as const;

export const YEARS_PER_PAGE = 12;
export const YEARS_RANGE = 5;
