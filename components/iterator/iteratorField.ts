import { Default, Description, Enum, Optional, Required } from '@tsed/schema'

import { Field } from '../../component-composition/field/component.field.label'

export const ITERATOR_APPEARANCE = {
  ASIDE: 'aside',
  BLOCK: 'block',
  FOOTER: 'footer',
  HEADER: 'header',
  INLINE: 'inline',
  LIST_ITEM: 'list-item',
  MAIN: 'main',
  NONE: 'none',
  NAVIGATION: 'navigation',
  ORDERED_LIST: 'ordered-list',
  SECTION: 'section',
  UNORDERED_LIST: 'unordered-list',
} as const

export const ITERATOR_ITEM_APPEARANCE = {
  AUTOMATIC: 'automatic',
  ...ITERATOR_APPEARANCE,
} as const

export type IteratorAppearance = (typeof ITERATOR_APPEARANCE)[keyof typeof ITERATOR_APPEARANCE]
export type IteratorItemAppearance = (typeof ITERATOR_ITEM_APPEARANCE)[keyof typeof ITERATOR_ITEM_APPEARANCE]

export const ITERATOR_DIRECTION = {
  DEFAULT: 'default',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const

export type IteratorDirection = (typeof ITERATOR_DIRECTION)[keyof typeof ITERATOR_DIRECTION]

export class IteratorField extends Field {
  @Required()
  @Default(ITERATOR_APPEARANCE.BLOCK)
  @Enum(ITERATOR_APPEARANCE)
  @Description('Appearance represents the intended visual style and role for the view.')
  appearance: IteratorAppearance = ITERATOR_APPEARANCE.BLOCK

  @Optional()
  @Description('CSS classes to add to the Iterator container.')
  customClass?: string

  @Required()
  @Default(ITERATOR_ITEM_APPEARANCE.AUTOMATIC)
  @Enum(ITERATOR_ITEM_APPEARANCE)
  @Description('Appearance represents the intended visual style and role for the items.')
  itemAppearance: IteratorItemAppearance = ITERATOR_ITEM_APPEARANCE.AUTOMATIC

  @Optional()
  @Description('CSS classes to add to items in the Iterator.')
  itemCustomClass?: string

  @Optional()
  @Default(ITERATOR_DIRECTION.VERTICAL)
  @Enum(ITERATOR_DIRECTION)
  @Description('The display direction for list items.')
  direction: IteratorDirection = ITERATOR_DIRECTION.VERTICAL
}
