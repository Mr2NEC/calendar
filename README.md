# Calendar - date and time range picker

A date and time range picker built from scratch in React and TypeScript, with no UI component libraries. The only runtime dependency beyond React is `date-fns`.

**Live demo:** https://calendar-taupe-seven.vercel.app

## Features

- Three navigation levels: days, months and years
- Single-date and date-range selection modes, switchable on the fly
- Start and end time pickers with range validation
- "Today" shortcut that returns to the day view
- Highlighting for today, the selected date, range boundaries, days inside the range and days from adjacent months
- A fixed 6-week grid, so the calendar height never jumps between months

## Technical highlights

**Compound components.** `Calendar` exposes its parts as `Calendar.Header`, `Calendar.Body`, `Calendar.Footer`, `Calendar.TimePicker` and `Calendar.SettingsButtons`. Consumers assemble the calendar from parts, state flows through context, and every part is memoized.

**Circular scroll picker on native events.** The time picker reacts to the mouse wheel and touch gestures through native `wheel`, `touchstart`, `touchmove` and `touchend` listeners registered with `{ passive: false }`. React synthetic events cannot call `preventDefault` on a passive wheel listener, so the page would scroll underneath. The list wraps around infinitely, uses a drag threshold to ignore finger jitter and renders only three visible items.

**Generic hooks.** `useRange<T>` returns a tuple of the range and its setters, and is reused for both the date range and the time range.

**Design tokens.** Colours, breakpoints, button sizes, radii and focus styles live in SCSS variables and mixins; every component has its own SCSS module.

## Stack

React 19, TypeScript, Vite, SCSS modules, date-fns, clsx, ESLint.

## Project structure

Each component is a folder that keeps everything about it together:

```
src/components/Calendar/
  Calendar.tsx            component and its compound parts
  CalendarProvider.tsx    context and state
  CalendarDays.tsx        day view
  CalendarMonths.tsx      month view
  CalendarYears.tsx       year view
  Calendar.types.ts       types
  Calendar.utils.ts       pure date functions
  Calendar.constants.ts   constants
  Calendar.module.scss    styles
  index.tsx               public export
```

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Possible improvements

- Unit tests for the pure functions in `Calendar.utils.ts`
- Keyboard navigation across dates and ARIA grid roles
- Locale-aware month and date formatting
