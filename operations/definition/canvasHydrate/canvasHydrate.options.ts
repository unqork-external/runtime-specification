import { Default, Description, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class CanvasHydrateOperationOptions {
  @Required()
  @Description('key of the canvas to hydrate')
  public targetKey: string

  @Required()
  @Description('An array or an an a array in the for of a string of component definitions to hydrate the canvas')
  definitions: any[] | string

  @Optional()
  @Default(false)
  @TrimmedDescription(`
    When true, the definitions passed to this operation will replace any current canvas items. 
    When false, the definitions passed to this operation will append to the end of the list.
  `)
  replace?: boolean = false
}
