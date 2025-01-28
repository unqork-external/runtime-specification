import { Default, Description, Enum, Example, Optional, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export enum ManipulateDomUnsafeOperationModes {
  REPLACE = 'replace',
  APPEND = 'append',
  REMOVE = 'remove',
  CLEAR = 'clear',
}

export class ManipulateDomUnsafeOperationOptions extends OperationOptions {
  @Required()
  @Description('The CSS selector to use for finding the target DOM node(s)')
  @Example('body', '.targetClass', '#elementId')
  selector: string

  @Required()
  @Description('The name of the HTML attribute to set')
  @Example('class', 'style', 'data-example-attribute')
  attribute: string

  @Optional()
  @Description('The value to set for the given attribute')
  value?: string

  @Optional()
  @Default(ManipulateDomUnsafeOperationModes.REPLACE)
  @Description('The type of manipulation to perform')
  @Enum(ManipulateDomUnsafeOperationModes)
  mode: ManipulateDomUnsafeOperationModes = ManipulateDomUnsafeOperationModes.REPLACE
}
