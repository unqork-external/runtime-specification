/**
 * The point of RuntimeEvent is to be the base strings for the specification.
 * It became a dumping ground for anything that smells like an event :D
 *
 * More refactor will happen here to normalize and clearly define
 */
export enum RuntimeEvent {
  // TODO: Delete - this is a duplicate of the watching structure
  //  Instead refine the watching spec structure if we're missing something.
  REFRESH = 'REFRESH',
  EDIT_SUBMISSION = 'EDIT_SUBMISSION',
  EXECUTE = 'EXECUTE',
  INITIALIZE = 'INITIALIZE',
  NEW_SUBMISSION = 'NEW_SUBMISSION',
  /**
   * TODO - delete, this can be handled by applying something after the regular execute event.
   */
  ON_POST_EXECUTE = 'ON_POST_EXECUTE',
  /**
   * TODO: Delete - duplicate of Initialize since we call "initialize" before the engine is started, but after all
   * containers have down their own local setups.
   */
  READY = 'READY',
  /**
   * Adding here until bigger event system refactor
   */
  ON_FIRST_RENDER = 'ON_FIRST_RENDER',

  // DOM EVENTS
  // TODO: Normalize DOM events. We discussed this earlier, but the change never happened.
  BLUR = 'BLUR',
  FOCUS = 'FOCUS',
  KEY_DOWN = 'KEY_DOWN',
  CHANGE = 'CHANGE',
  ON_CLICK = 'ON_CLICK',
  ON_MOUSE_OVER = 'ON_MOUSE_OVER',
  MOUSE_UP = 'MOUSE_UP',
  BEFORE_UNLOAD = 'BEFORE_UNLOAD',

  // TODO: Component specific event. belongs on the component specifically.
  ON_DROP = 'ON_DROP',
  ON_POSITION_OPEN = 'ON_POSITION_OPEN',
  ON_POSITION_CLOSE = 'ON_POSITION_CLOSE',

  // TODO - Should this just be state change - ?
  //  Refactor incoming - this should go away
  DYNAMIC_STATE_CHANGE = 'DYNAMIC_STATE_CHANGE',

  // Grid Event Types
  // TODO: Component specific event. belongs on the component specifically.
  ON_ADD_ROW = 'ON_ADD_ROW',
  // TODO: Component specific event. belongs on the component specifically.
  ON_DELETE_ROW = 'ON_DELETE_ROW',
  // TODO: Component specific event. belongs on the component specifically.
  ON_EDIT_ROW = 'ON_EDIT_ROW',
  // TODO: Component specific event. belongs on the component specifically.
  ON_SAVE_ROW = 'ON_SAVE_ROW',

  // Used by Angular Proxy
  // TODO: Component specific event. belongs on the component specifically.
  ANGULAR_EVENT = 'ANGULAR_EVENT',

  //Timer Event Types
  // TODO: Component specific event. belongs on the component specifically.
  ON_FINISH_COUNTING = 'ON_FINISH_COUNTING',

  // Module Events
  MODULE_REQUESTED = 'MODULE_REQUESTED',
  MODULE_LOADED = 'MODULE_LOADED',
  MODULE_STORED = 'MODULE_STORED',
  MODULE_INIT = 'MODULE_INIT',
  MODULE_INITIALIZED = 'MODULE_INITIALIZED',
  MODULE_STARTED = 'MODULE_STARTED',
  MODULE_READY = 'MODULE_READY',
  MODULE_DESTROYED = 'MODULE_DESTROYED',
  MODULE_COMPONENTS_INIT = 'MODULE_COMPONENTS_INIT',
  MODULE_COMPONENTS_STARTED = 'MODULE_COMPONENTS_STARTED',
  MODULE_COMPONENTS_READY = 'MODULE_COMPONENTS_READY',
  MODULE_COMPONENTS_DESTROYED = 'MODULE_COMPONENTS_DESTROYED',
  MODULE_INSERTED = 'MODULE_INSERTED',

  // Slot Events
  SLOT_CREATED = 'SLOT_CREATED',
  SLOT_CLEARED = 'SLOT_CLEARED',

  // Entity Events
  ENTITY_REGISTERED = 'ENTITY_REGISTERED',
  ENTITY_DESTROYED = 'ENTITY_DESTROYED',
}
