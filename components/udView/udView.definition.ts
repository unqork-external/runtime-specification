import {
  Optional,
  CollectionOf,
  Default,
  Description,
  DiscriminatorValue,
  Enum,
  Property,
  Required,
} from '@tsed/schema'

import { UdViewTargets } from './udViewTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { Field } from '../../component-composition/field/component.field.label'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'

export class UdViewBasicField extends Field {
  @Description('Allows customization of the class HTML parameter for the root element of the component')
  customClass?: string
}

export enum UdViewDirection {
  HORIZONTAL = 'horizontal',
  DEFAULT = 'default',
  VERTICAL = 'vertical',
}

export enum UdViewAppearance {
  ASIDE = 'aside',
  BLOCK = 'block',
  FOOTER = 'footer',
  HEADER = 'header',
  INLINE = 'inline',
  LIST_ITEM = 'list-item',
  MAIN = 'main',
  NAVIGATION = 'navigation',
  NONE = 'none',
  ORDERED_LIST = 'ordered-list',
  SECTION = 'section',
  UNORDERED_LIST = 'unordered-list',
}

@DiscriminatorValue('udView')
@ViewTargets(UdViewTargets)
export class UdViewComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'udView' = 'udView' as const

  @Default(UdViewAppearance.BLOCK)
  @Enum(UdViewAppearance)
  @Description('Appearance represents the intended visual style and role for the view.')
  appearance?: UdViewAppearance

  @Enum(UdViewDirection)
  @Default(UdViewDirection.VERTICAL)
  @Description('Direction represents how the view children should be disposed.')
  direction?: UdViewDirection

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Property(UdViewBasicField)
  @Description('Field settings')
  field: UdViewBasicField = new UdViewBasicField()

  @Description('Standard nestable implementation')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child IDs for nestable references')
  childIds: string[] = []

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Optional()
  declare signals?: SignalTargets<UdViewTargets>
}
