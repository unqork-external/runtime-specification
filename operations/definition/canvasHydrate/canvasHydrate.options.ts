import { Description, Required } from '@tsed/schema'

export class CanvasHydrateOperationOptions {
  @Required()
  @Description('key of the canvas to hydrate')
  public targetKey: string

  @Required()
  @Description('An array or an an a array in the for of a string of component definitions to hydrate the canvas')
  definitions: any[] | string
}
