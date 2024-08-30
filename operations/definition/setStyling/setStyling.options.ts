import { Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class SetStylingOperationOptions {
  @TrimmedDescription(`
    Target component(s) that will receive the \`styling\` update.
    Engine Syntax is supported as a way to access the intended targets. 
  `)
  @Example('styled-component', 'panel.*')
  targetKey: string

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
