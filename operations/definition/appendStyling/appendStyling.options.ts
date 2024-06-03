import { Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class AppendStylingOperationOptions {
  @TrimmedDescription(`
    Target component(s) that will receive the \`styling\` update.
    Engine Syntax is supported as a way to access the intended targets. 
  `)
  @Example('styled-component', 'panel.*')
  targetKey: string

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
