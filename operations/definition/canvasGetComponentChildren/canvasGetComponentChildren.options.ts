import { Default, Description, Example, Optional, Required } from '@tsed/schema'

export class CanvasGetComponentChildrenOperationOptions {
  @Required()
  @Description('Key of the canvas to target')
  targetKey: string

  @Required()
  @Description('Id of the component within the canvas to get children for')
  componentId: string

  @Optional()
  @Description('Use to get data with only the specified paths per component')
  @Example('["label", "type"]')
  paths?: string[]

  @Optional()
  @Description(
    'When shallow is true, only the direct children of the component will be returned. Set to false to get nested components as well.',
  )
  @Default(true)
  shallow?: boolean = true
}
