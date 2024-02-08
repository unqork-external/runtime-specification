import { CollectionOf, Default, Description } from '@tsed/schema'

import { ValidationResult } from '../../validations/validationResult'
/**
 * NOTE: These fields should NOT be configurable in the designer.
 * They're used to keep track of the error state of the component.
 *
 * TODO: probably need a better pattern to keep these out of the component definition
 */

export class BasicChildComponentInfo {
  @Description('Child component key')
  key: string

  @Description('Child component label')
  label?: string

  @Description('Child component type')
  type: string
}

export class NavComponentErrorInfo {
  @Description('Basic child component info')
  componentInfo: BasicChildComponentInfo = new BasicChildComponentInfo()

  @Description('Result of validation on particular child component')
  result: ValidationResult

  @Description('Key of component initiating validation')
  originatingContainerKey?: string

  @Description('Validation error type')
  type?: string
}

export class NavigationErrors {
  @Default(false)
  @Description('Keeps track of whether nav-level errors should be visible')
  hidden: boolean

  @CollectionOf(NavComponentErrorInfo)
  @Description('List of all components with errors')
  list: NavComponentErrorInfo[]
}
