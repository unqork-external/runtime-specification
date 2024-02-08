import { Description, Example } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class SetStylingOperationOptions {
  @Description(
    trimAll(`
    Target component(s) that will receive the \`styling\` update.
    Engine Syntax is supported as a way to access the intended targets. 
  `),
  )
  @Example('styled-component', 'panel.*')
  targetKey: string

  @Description(
    trimAll(`
      The complete configuration to update the components' \`styling.targets\` property with. 
      This can include CSS classnames and/or CSS objects.
    `),
  )
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
