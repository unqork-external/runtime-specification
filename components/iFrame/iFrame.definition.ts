import { Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { IFrameOptions } from './iFrameOptions'
import { IFrameStyling } from './styling/iFrame.styling'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'

@DiscriminatorValue('iframe')
export class IFrameComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'iframe' = 'iframe' as const

  @Property(Display)
  display: Display = new Display()

  @Property(Field)
  field: Field = new Field()

  @Property()
  options: IFrameOptions

  @Description('Object that maps customized CSS styling to specific targets on the IFrame.')
  @Property()
  styling: IFrameStyling
}
