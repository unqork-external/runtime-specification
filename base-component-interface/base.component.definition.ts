import { Any, CollectionOf, Default, Description, DiscriminatorKey, Property, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'
import { InputRef } from '../inputs/inputRef'
import { RootObject } from '../root-object/rootObject'
import { StylingModel } from '../styling'
import { Validation } from '../validations/validation'

@TrimmedDescription(`
  Base Component Definition is the fundamental interface any component that wishes to leverage the runtime must follow.
  It is the agreed upon contract between the Runtime and anything that should be recognized as a component.
`)
export class BaseComponentDefinition extends RootObject {
  @Required()
  key: string

  /**
   *  TODO: Type will be supplanted by `package` in the near future
   */
  @Required()
  @Description(`Name of the type of component.`)
  @DiscriminatorKey()
  type: string

  @Default(true)
  executable?: boolean = true

  /**
   * SOON TO BE DEPRECATED
   * As Variables are introduced, Inputs will be phased out
   */
  @CollectionOf(InputRef)
  inputs?: InputRef[]

  @Property()
  styling?: StylingModel<any>

  @Property()
  validation?: Validation

  @Any()
  @Description(`Current value of the component`)
  value?: unknown
}
