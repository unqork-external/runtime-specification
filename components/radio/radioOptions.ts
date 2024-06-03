import { Default, Description, Optional } from '@tsed/schema'

export class RadioOptions {
  @Optional()
  @Default(false)
  buttonGroup: boolean = false

  @Optional()
  @Description('Any custom CSS classes to apply to the component.')
  customClass?: string

  @Optional()
  @Default(false)
  inline: boolean = false

  @Optional()
  @Default(false)
  required: boolean = false

  @Optional()
  @Default(0)
  tabindex: number = 0
}
