import { Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class ClearStylingOperationOptions {
  @TrimmedDescription(`
    Target component(s) that will receive the \`styling\` update.
    Engine Syntax is supported as a way to access the intended targets. 
  `)
  @Example('styled-component', 'panel.*')
  targetKey: string
}
