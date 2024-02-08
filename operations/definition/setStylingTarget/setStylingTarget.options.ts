import { Description, Example } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class SetStylingTargetOperationOptions {
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
      An object with the key as the specific target within the component that the update will be sent to,
      and the value being the CSS properties and/or classnames to be set to that target.
    `),
  )
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
