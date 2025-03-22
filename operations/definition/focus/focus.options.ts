import { Example, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OperationOptions } from '../../interface'

export class FocusOperationOptions extends OperationOptions {
  @Required()
  @Example('firstNameTextField')
  @TrimmedDescription(`"targetKey" refers to the intended target to focus on.`)
  declare targetKey: string
}
