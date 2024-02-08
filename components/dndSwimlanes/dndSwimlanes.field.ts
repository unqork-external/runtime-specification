import { Default, Description, Example, Optional, Property } from '@tsed/schema'

import type {
  DndCardCustomCssClass,
  DndCardCustomCssType,
  DndItemActionAfterDrop,
  DndSwimlaneName,
} from './dndSwimlaneDef'
import { trimAll } from '../../../utilities'
import type { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Field } from '../../componentComposition/field/component.field.label'
import { InputLabel } from '../../componentComposition/input/component.input'

export type SwimlaneGroupingAttribute = string
export type CustomType = string
export type DndCardViewByTypeMap = Record<DndSwimlaneName, BaseComponentDefinition[]>

export class DndSwimlanesField extends Field {
  @Property(InputLabel)
  @Description(
    trimAll(`
      Appears above the input field to inform what information is being requested. 
      Labels also help to identify the component on the Module Editor.
    `),
  )
  label: InputLabel = new InputLabel()

  @Description('The message to display in empty Swimlanes.')
  emptySwimlaneMessage: string

  @Description('The attribute from the Card data to use for grouping Swimlanes.')
  @Example('status', 'type')
  @Default('status')
  swimlaneGroupingAttribute: SwimlaneGroupingAttribute = 'status'

  @Description('Which values should be picked from the swimlanes data to be used as the Swimlanes value.')
  valueFormattingAttributes: string[] = []

  @Description('The action for the source Container to take after a Card has been dragged from here.')
  @Default('move')
  sourceItemActionAfterDrop: DndItemActionAfterDrop = 'move'

  @Description('The Boolean attribute from the Card data to use for individually disabling Cards in Swimlanes.')
  @Example('disabled', 'isDraggable')
  @Default('disabled')
  cardDisabledAttribute: string = 'disabled'

  @Description(
    `The 'cardDisabledAttribute' is mapping to 'disabled'
    but if users enter "isMovable" they mean the inverse of "isMovable" === "disabled".`.trim(),
  )
  @Default(false)
  cardDisabledAttributeInvert: boolean = false

  @Description('The attribute from the Card data to use for Card View Type.')
  @Example('status', 'type')
  @Default('status')
  cardViewTypeAttribute: string = 'status'

  @Description('The map of Card View Type attributes to JSON arrays of components to build the Card View.')
  @Default({})
  cardViewByTypeMap: DndCardViewByTypeMap = {}

  @Description('Which attribute to use to apply custom CSS classes to the cards.')
  @Example(
    `
      Ex: 'status', 'type'
      If this is the same as 'swimlaneGroupingAttribute', then Cards can be styled differently
      by the swimlanes they are in. However, if 'cardViewCustomTypeAttribute' is different than 
      'swimlaneGroupingAttribute', then you can have cards in the same swimlane with different styles
      based on some other attribute.
      For a JIRA example, if 'cardViewCustomTypeAttribute' is set to 'epicLink', then cards in the
      'To Do' column could be styled different from each other based on which Epic they've been assigned
      to. 'Epic 1' cards are blue, 'Epic 2' cards are red, etc.
      If 'cardViewCustomTypeAttribute' is the same as 'swimlaneGroupingAttribute', then all cards
      in the 'To Do' swimlane are one color. Cards in 'In Progress' are another color. Etc.
    `.trim(),
  )
  @Default('status')
  cardViewCustomCssTypeAttribute: CustomType = 'status'

  @Description('Custom CSS classes to add based on the CustomTypeAttribute.')
  @Example({ 'To Do': 'to-do-css-class', In_Progress: 'inProgressCssClass' })
  @Default({})
  customCssTypeAttributesMap: Record<DndCardCustomCssType, DndCardCustomCssClass> = {}

  @Optional()
  @Description('CSS classes to add to the Swimlane container.')
  containerCustomClass?: string

  @Optional()
  @Description('CSS classes to add to all items in the Swimlanes.')
  itemCustomClass?: string
}
