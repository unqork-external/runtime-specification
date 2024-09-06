import { EventType } from './eventType.enum'

/**
 * Readonly array which defines runtime events. These events are not react synthetic events
 * so we need to handle them differently.
 *
 * We use this to filter these events out before passing them to the bindings service
 * and subsequently to the component Views and JSX elements.
 */
export const RuntimeEvents = [
  EventType.ON_EXECUTE,
  EventType.ON_EDIT_SUBMISSION,
  EventType.ON_FIRST_RENDER,
  EventType.ON_INITIALIZE,
  EventType.ON_NEW_SUBMISSION,
  EventType.ON_REFRESH,
] as const
