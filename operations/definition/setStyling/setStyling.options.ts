import { Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { TargetedOperationOptions } from '../../interface'

export class SetStylingOperationOptions extends TargetedOperationOptions {
  @TrimmedDescription(`
    The complete configuration to update the components' \`styling.targets\` property with. 
    This can include CSS classnames and/or CSS objects.
  `)
  @Example({
    root: [
      {
        borderRadius: '5px',
      },
      'i-am-root',
    ],
    input: [
      {
        color: 'blue',
      },
      'styling-class-99',
    ],
  })
  update: object
}
