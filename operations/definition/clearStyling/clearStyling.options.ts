import { Description, Example } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class ClearStylingOperationOptions {
  @Description(
    trimAll(`
    Target component(s) that will receive the \`styling\` update.
    Engine Syntax is supported as a way to access the intended targets. 
  `),
  )
  @Example('styled-component', 'panel.*')
  targetKey: string
}
