import { Description, Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class ToggleClassOnTargetOperationOptions {
  @TrimmedDescription(`
    Target component(s) that will receive the \`styling\` update.
    Engine Syntax is supported as a way to access the intended targets. 
  `)
  @Example('styled-component', 'panel.*')
  targetKey: string

  @Description('The styling target where the classname will toggle.')
  @Example('root', 'tableHeaderCell')
  stylingTarget: string

  @Description('The name of the class that will be toggled')
  classname: string
}
