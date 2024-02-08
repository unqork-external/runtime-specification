import { Default, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'
import { ReadonlyDeep } from 'type-fest'

import {
  DndCardData,
  DndCardViewTypeKey,
  DndComponentsKey,
  DndDoubleUnderscore,
  DndSwimlaneDef,
  DndSwimlaneName,
  type DndSwimlanesCardData,
  DndSwimlanesDisplayCard,
} from './dndSwimlaneDef'
import { DndSwimlanesDisplay } from './dndSwimlanes.display'
import { DndSwimlanesEvents } from './dndSwimlanes.events'
import { DndSwimlanesField } from './dndSwimlanes.field'
import { DndSwimlanesOptions } from './dndSwimlanes.options'
import { DndSwimlanesStyling } from './dndSwimlanes.styling'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Interactions } from '../../interactions/interactions'
import { Nestable, NestableDef, NestableType } from '../../nestables'

// Ex: { '__todo': ['abc-123', ...] }
export type DndCardViewKeyToIdsMap = Record<DndCardViewTypeKey, string[]>

// Ex: '__todoComponents'
export type DndCardViewComponentsKey = `${DndDoubleUnderscore}${Lowercase<string>}${DndComponentsKey}`

// Ex: { '__todoComponents': [...componentDefinitions...] }
export type DndCardViewKeyToComponentsMap = Record<
  DndCardViewComponentsKey,
  readonly ReadonlyDeep<BaseComponentDefinition>[]
>

// Ex: [{ 'To Do': '__todo' }]
export type DndCardViewNameToKeyMap = Record<DndSwimlaneName, DndCardViewTypeKey>

export type DndDisplayCardsMap = Record<DndCardViewTypeKey, DndSwimlanesDisplayCard[]>
@DiscriminatorValue('dndSwimlanes')
export class DndSwimlanesComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'dndSwimlanes' = 'dndSwimlanes' as const

  @Property()
  field: DndSwimlanesField = new DndSwimlanesField()

  @Property()
  display: DndSwimlanesDisplay = new DndSwimlanesDisplay()

  @Property()
  options: DndSwimlanesOptions = new DndSwimlanesOptions()

  @Default({})
  @Description('The parsed, grouped JSON source data formatted into Swimlanes Data for the view.')
  swimlanesCardData: DndSwimlanesCardData

  @Description('The data to use for the Swimlane columns definitions.')
  swimlaneDefs: DndSwimlaneDef[] = []

  @Default({})
  @Description('Standard nestable implementation.')
  nestables: NestableDef = {
    rows: new CardsNestable(),
  }

  @Default([])
  @Description('Child IDs for `rows` nestable references.')
  rows: string[] = []

  @Default([])
  @Description('Nested child IDs for rendering.')
  displayCards: Record<DndCardViewTypeKey, DndSwimlanesDisplayCard[]> = {}

  @Description('Other Components can set this value to be the initial data for the Swimlanes.')
  initialData: string | []

  @Description('When initialData comes in, we parse and set that to cardData for future use.')
  cardData: DndCardData[]

  @Default([])
  @Description('The values that will be in the list.')
  value: Pick<DndCardData, string>[][] = []

  @Property()
  interactions: Interactions = new Interactions()

  @Description('Event Handlers for Swimlanes.')
  eventHandlers: DndSwimlanesEvents

  @Description('Styling targets available for the Component.')
  styling: DndSwimlanesStyling
}

export class CardsNestable extends Nestable {
  @Property()
  propertyName: string = 'rows'

  @Property()
  type: NestableType = NestableType.MATRIX

  @Property()
  children: string = 'components'
}
