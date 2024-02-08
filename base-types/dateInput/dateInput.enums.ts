export enum DateInputLimit {
  NONE = '',
  FUTURE = 'future',
  PAST = 'past',
  BEFORE = 'before',
  AFTER = 'after',
  BETWEEN = 'between',
}

export enum DateInputUnit {
  DAYS = 'days',
  MONTHS = 'months',
  YEARS = 'years',
}

export enum DateInputRelation {
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
  NOW = 'now',
  INFINITE = 'infinite',
}
