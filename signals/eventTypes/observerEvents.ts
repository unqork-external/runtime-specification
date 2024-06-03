import { EventType } from './eventType.enum'

/**
 * Readonly array which defines the event types we want to filter explicitly from
 * of the signals arrays when initializing observer services.
 *
 * We also use this to filter these events out before passing them to the bindings service
 * and subsequently to the component Views and JSX elements.
 *
 * These event types follower an observer pattern where they act in response to some
 * observed context or state change.
 */
export const ObserverEvents = [EventType.ON_KEYSTROKE, EventType.ON_WATCH] as const
