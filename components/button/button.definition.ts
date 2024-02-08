import { Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { DomEvents } from './buttonDomEvents'
import { ButtonField } from './buttonField'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import {
  StandardAdornmentsAsNestables,
  StandardAdornmentsProperties,
} from '../../componentComposition/adornments/component.adornments'
import { Display } from '../../componentComposition/display/component.display'
import { Interactions } from '../../interactions/interactions'
import { NestableDef } from '../../nestables'

@DiscriminatorValue('button')
export class ButtonComponentDefinition extends BaseComponentDefinition {
  @Const('button')
  @Description('Button component type.')
  type: 'button' = 'button' as const

  @Property()
  @Default(false)
  useSimpleView?: boolean = false

  @Property()
  display: Display = new Display()

  @Default(false)
  @Description('If true, the button will be disabled if the forms are invalid.')
  disableOnInvalidForms: boolean = false

  @Default(false)
  @Description('control button disabled state when a submission is created')
  preventDisableOnSubmitting: boolean = false

  @Default(false)
  @Description('control button disabled state when firing triggers/events')
  oneClickOnly: boolean = false

  @Property(ButtonField)
  @Description('Button field settings.')
  field: ButtonField = new ButtonField()

  @Property(Interactions)
  @Description('Button interactions.')
  interactions?: Interactions

  @Description('The goto step path for workflow.')
  stepPath?: string

  @Property(DomEvents)
  @Description('Dom event for creating watchers')
  domEvents?: DomEvents

  @Property(StandardAdornmentsProperties)
  adornments = new StandardAdornmentsProperties()

  @Description(
    trimAll(`
      Fully qualified child keys for adornments in the left slot.
      Maintained by nestable api.
    `),
  )
  left?: string[] = []

  @Description(
    trimAll(`
      Fully qualified child keys for adornments in the right slot.
      Maintained by nestable api.
    `),
  )
  right?: string[] = []

  @Description('Nestable definitions for adorned button component')
  nestables?: NestableDef = new StandardAdornmentsAsNestables()
}
