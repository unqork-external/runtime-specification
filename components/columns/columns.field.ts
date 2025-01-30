import { Description, Optional } from '@tsed/schema'

@Description('Columns component Field settings')
export class ColumnsField {
  @Optional()
  @Description(
    'Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.',
  )
  customClass?: string

  @Optional()
  @Description('Adds a custom aria-label to the component.')
  ariaLabel?: string

  @Optional()
  @Description('Adds a custom role to the component.')
  ariaRole?: string
}
