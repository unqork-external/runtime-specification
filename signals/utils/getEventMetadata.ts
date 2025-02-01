import { StabilityEnum } from '../../../decorators'
import { EventType } from '../../../events'

/**
 * Provides metadata about the events that can be used with the runtime. Provides
 * event names, descriptions, and stability level.
 */
export function getEventMetadata() {
  return EVENTS
}

export function getEventMetadataMap() {
  return EVENTS.reduce((map, { type, ...ev }) => {
    map[type] = ev
    return map
  }, {})
}

/**
 * TODO: When we have a way to register component specific events with the runtime
 * see if it still makes sense for category to be a combination of component types
 * and DOM/Runtime. We may want to have separate fields. One to track type of event
 * (DOM or Runtime) and another to track with component the event is valid for.
 */
enum EventCategories {
  VEGA_TABLE = 'vegaTable',
  POSITION = 'position',
  ITERATOR = 'iterator',
  TIMER = 'timer',
  DOM = 'dom',
  RUNTIME = 'runtime',
}

type EventMetadata = {
  name: string
  type: string
  categories: EventCategories[]
  stability: StabilityEnum
  description?: string
  // TODO See if we can remove this when we take on the Event refactor spike. https://unqork-jira.atlassian.net/browse/UQE-6405
  id?: string
}

type EventMetadataList = Array<EventMetadata>

// TODO: Move out of here and into component registered event
const VEGA_TABLE_COMPONENT_EVENTS: EventMetadataList = [
  {
    name: 'On Table Cell Change',
    type: 'onTableCellChange',
    description:
      'Occurs when a change happens in a component inside the Vega Table cell. For text components (textfields, numbers, etc.) it fires when a cell editing has finished. For checkboxes and dropdowns, it fires when a change in the selection occurs.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Table Cell Double Click',
    type: 'onTableCellDoubleClick',
    description: "Occurs when double-clicking a Vega Table cell. Main usage is to toggle cell's edit mode ON.",
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Table Cell Focus',
    type: 'onTableCellFocus',
    description:
      'Occurs when a Vega Table cell has received focus. It could be fired from clicks or tab-navigation from a different cell.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Table Cell Key Down',
    type: 'onTableCellKeyDown',
    description: 'Occurs when a key is pressed on the selected/active cell in the Vega Table.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Table Row Click',
    type: 'onTableRowClick',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.ALPHA,
  },
  {
    name: 'On Toggle Column Filter List',
    type: 'onToggleColumnFilterList',
    description: 'Occurs when toggling column filters in the Vega Table.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Toggle Column Visibility Menu',
    type: 'onToggleColumnVisibilityMenu',
    description: 'Occurs when toggling the Column Visibility menu on the Vega Table.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Toggle Full Screen',
    type: 'onToggleFullScreen',
    description: 'Occurs when toggling the fullscreen mode on the Vega Table.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Toggle Global Filter',
    type: 'onToggleGlobalFilter',
    description: 'Occurs when toggling the Vega Table toolbar.',
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Toggle Row Density',
    type: 'onToggleRowDensity',
    description: "Occurs when there is a change to the Vega Table's row density.",
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Table Page Size Change',
    type: 'onTablePageSizeChange',
    description: "Occurs when there is a change to the Vega Table's page size.",
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Table Pagination Change',
    type: 'onTablePaginationChange',
    description: "Occurs when there is a change to the Vega Table's page index.",
    categories: [EventCategories.VEGA_TABLE],
    stability: StabilityEnum.STABLE,
  },
]

// TODO: Move out of here and into component registered event
const POSITION_COMPONENT_EVENTS: EventMetadataList = [
  {
    name: 'On Position Open',
    type: 'onPositionOpen',
    categories: [EventCategories.POSITION],
    stability: StabilityEnum.ALPHA,
  },
  {
    name: 'On Position Close',
    type: 'onPositionClose',
    categories: [EventCategories.POSITION],
    stability: StabilityEnum.ALPHA,
  },
]

// TODO: Move out of here and into component registered event
const ITERATOR_COMPONENT_EVENTS: EventMetadataList = [
  {
    name: 'On Row Update',
    type: 'onRowUpdate',
    categories: [EventCategories.ITERATOR],
    stability: StabilityEnum.ALPHA,
  },
]

// TODO: Move out of here and into component registered event
const TIMER_COMPONENT_EVENTS: EventMetadataList = [
  {
    name: 'On Finish Counting',
    type: 'FINISHED_COUNTING',
    categories: [EventCategories.TIMER],
    stability: StabilityEnum.ALPHA,
  },
]

const DOM_EVENTS: EventMetadataList = [
  {
    name: 'On Blur',
    type: EventType.ON_BLUR,
    description: 'Occurs when an input component has lost focus.',
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Change',
    type: EventType.ON_CHANGE,
    description:
      "Occurs when an input component's value has changed. Fired when the end-user commits a value change. Note: Does not apply in cases like typing in a Search Select until the selection for the component has been made.",
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Click',
    type: EventType.ON_CLICK,
    description: 'Occurs on click of any UI component that is not disabled.',
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Double Click',
    type: EventType.ON_DOUBLE_CLICK,
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Drop',
    type: EventType.ON_DROP,
    categories: [EventCategories.DOM],
    stability: StabilityEnum.ALPHA,
  },
  {
    name: 'On Focus',
    type: EventType.ON_FOCUS,
    description: 'Occurs when an input component has received focus.',
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Mouse Enter',
    type: EventType.ON_MOUSE_ENTER,
    description: 'Occurs when a cursor (mouse) has moved into a UI component (hovering over).',
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
  {
    name: 'On Mouse Leave',
    type: EventType.ON_MOUSE_LEAVE,
    description: 'Occurs when a cursor (mouse) has moved off a UI component (leaving hovering).',
    categories: [EventCategories.DOM],
    stability: StabilityEnum.STABLE,
  },
]

const RUNTIME_EVENTS: EventMetadataList = [
  {
    name: 'On Edit Submission',
    type: EventType.EDIT_SUBMISSION,
    description:
      'Occurs on Edit Submission. Occurs on load of a module with a submission. Similar to Initializer component Edit Submission.',
    categories: [EventCategories.RUNTIME],
    stability: StabilityEnum.STABLE,
    id: EventType.EDIT_SUBMISSION,
  },
  {
    name: 'On Execute',
    type: EventType.EXECUTE,
    description:
      'Occurs when a component has been executed using the Execute Operation or triggered with the "trigger" output type in logic components.',
    categories: [EventCategories.RUNTIME],
    stability: StabilityEnum.STABLE,
    id: EventType.EXECUTE,
  },
  {
    name: 'On Initialize',
    type: EventType.INITIALIZE,
    description:
      'Occurs the moment a component has been loaded on the page, either by on page load or Dynamic Refresh. This includes if components are hidden, since they are still loaded onto the page as hidden.',
    categories: [EventCategories.RUNTIME],
    stability: StabilityEnum.STABLE,
    id: EventType.INITIALIZE,
  },
  {
    name: 'On New Submission',
    type: EventType.NEW_SUBMISSION,
    description:
      'Occurs on New Submission. Occurs on load of a module without a submission. Similar to Initializer component New Submission.',
    categories: [EventCategories.RUNTIME],
    stability: StabilityEnum.STABLE,
    id: EventType.NEW_SUBMISSION,
  },
]

const EVENTS: EventMetadataList = [
  ...VEGA_TABLE_COMPONENT_EVENTS,
  ...POSITION_COMPONENT_EVENTS,
  ...ITERATOR_COMPONENT_EVENTS,
  ...TIMER_COMPONENT_EVENTS,
  ...DOM_EVENTS,
  ...RUNTIME_EVENTS,
]
