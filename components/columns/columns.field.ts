import { Description } from '@tsed/schema'

@Description('Columns component Field settings')
export class ColumnsField {
  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  customClass?: string
}
