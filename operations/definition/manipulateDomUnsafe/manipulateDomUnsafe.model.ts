import { DiscriminatorValue, Required } from '@tsed/schema'

import { ManipulateDomUnsafeOperationOptions } from './manipulateDomUnsafe.options'
import { Alpha, TrimmedDescription } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.MANIPULATE_DOM_UNSAFE)
@TrimmedDescription(`
  The ManipulateDomUnsafe operation directly sets HTML attributes on DOM node(s) targeted using CSS selectors.
`)
@Alpha()
export class ManipulateDomUnsafeOperation extends Operation<OperationTypes.MANIPULATE_DOM_UNSAFE> {
  @Required()
  public type = OperationTypes.MANIPULATE_DOM_UNSAFE as const

  @Required()
  public options: ManipulateDomUnsafeOperationOptions = new ManipulateDomUnsafeOperationOptions()
}
