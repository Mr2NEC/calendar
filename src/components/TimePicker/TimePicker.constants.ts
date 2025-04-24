export const TIME_PICKER_TYPES = {
  START: "start",
  END: "end",
} as const;

export const TIME_PICKER_MODES = {
  SINGLE: "single",
  RANGE: "range",
} as const;

export type TimePickerMode =
  (typeof TIME_PICKER_MODES)[keyof typeof TIME_PICKER_MODES];
