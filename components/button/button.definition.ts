import { Const, Default, Description, DiscriminatorValue, Example, Optional } from '@tsed/schema'

import { ButtonDomEvents } from './button.events'
import { ButtonField } from './button.field'
import { ButtonOptions } from './button.options'
import { ButtonStyling } from './button.styling'
import { ButtonTargets } from './buttonTargets.enum'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import {
  StandardAdornmentsAsNestables,
  StandardAdornmentsProperties,
} from '../../component-composition/adornments/component.adornments'
import { Display } from '../../component-composition/display/component.display'
import { NestableDef } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('button')
@ViewTargets(ButtonTargets)
export class ButtonComponentDefinition extends BaseComponentDefinition {
  @Const('button')
  type: 'button' = 'button' as const

  @TrimmedDescription(`
    Boolean used to determine if the underlying view is simple and unstyled. 
    For use in Vega Tables. This setting does not exist in Centauri.
  `)
  @Default(false)
  useSimpleView: boolean = false

  @Optional()
  display: Display = new Display()

  @Description('If `true`, Button will be disabled if forms are invalid.')
  @Optional()
  @Default(false)
  disableOnInvalidForms: boolean = false

  @Description('Control button disabled state when a submission is created.')
  @Optional()
  @Default(false)
  preventDisableOnSubmitting: boolean = false

  @Description('When `true`, Button becomes disabled after one click.')
  @Optional()
  @Default(false)
  oneClickOnly: boolean = false

  @Optional()
  field: ButtonField = new ButtonField()

  @Optional()
  options: ButtonOptions = new ButtonOptions()

  @Optional()
  @Description('The unique path of the workflow step; you must provide a step path for go-to navigation.')
  @Example('stepone')
  stepPath?: string

  @Optional()
  domEvents?: ButtonDomEvents

  @Optional()
  adornments = new StandardAdornmentsProperties()

  @Description('Fully qualified child keys for adornments in the left slot. Maintained by nestable API.')
  @Optional()
  @Default([])
  left: string[] = []

  @Optional()
  declare signals?: SignalTargets<ButtonTargets>

  @Optional()
  @Default([])
  @TrimmedDescription(`
    Fully qualified child keys for adornments in the right slot.
    Maintained by nestable api.
  `)
  right: string[] = []

  @Optional()
  nestables: NestableDef = new StandardAdornmentsAsNestables()

  @Example(targetedStylingExample)
  declare styling?: ButtonStyling
}
