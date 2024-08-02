import { Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class AppendStylingOperationOptions extends TargetedOperationOptions {
  @TrimmedDescription(`
    An object with the key as the specific target within the component that the update will be sent to,
    and the value being the CSS properties and/or classnames to be appended to the existing CSS.
  `)
  @Example({
    input: [
      {
        backgroundColor: 'yellow',
      },
      'fun-confetti-input',
    ],
  })
  update: object
}
