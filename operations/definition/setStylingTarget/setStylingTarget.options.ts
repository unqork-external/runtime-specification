import { Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class SetStylingTargetOperationOptions extends TargetedOperationOptions {
  @TrimmedDescription(`
    An object with the key as the specific target within the component that the update will be sent to,
    and the value being the CSS properties and/or classnames to be set to that target.
  `)
  @Example({
    root: [
      {
        borderRadius: '5px',
      },
      'i-am-root',
    ],
  })
  update: object
}
