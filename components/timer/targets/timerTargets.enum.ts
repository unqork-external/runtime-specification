export enum TimerTargets {
  ROOT = 'root',
  HELPER_TEXT = 'helperText',
  TIMER_DISPLAY = 'timerDisplay',
  LABEL = 'label',
  TOOLTIP_BUTTON = 'tooltipButton',
  TOOLTIP_POPOVER = 'tooltipPopover',
}

const TIMER_CLASS_ROOT = 'VGTimer'

export enum TimerStyleClasses {
  LABEL = `${TIMER_CLASS_ROOT}-${TimerTargets.LABEL}`,
  HELPER_TEXT = `${TIMER_CLASS_ROOT}-${TimerTargets.HELPER_TEXT}`,
  TIMER_DISPLAY = `${TIMER_CLASS_ROOT}-${TimerTargets.TIMER_DISPLAY}`,
  ROOT = `${TIMER_CLASS_ROOT}-${TimerTargets.ROOT}`,
  TOOLTIP_BUTTON = `${TIMER_CLASS_ROOT}-${TimerTargets.TOOLTIP_BUTTON}`,
  TOOLTIP_POPOVER = `${TIMER_CLASS_ROOT}-${TimerTargets.TOOLTIP_POPOVER}`,
}
