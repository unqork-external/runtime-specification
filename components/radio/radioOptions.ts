import { Default, Description } from '@tsed/schema'

export class RadioOptions {
  @Default(false)
  buttonGroup: boolean = false

  @Description('Any custom CSS classes to apply to the component.')
  customClass: string

  @Default(false)
  inline: boolean = false

  @Default(false)
  required: boolean = false

  @Default(0)
  tabindex: number = 0
}
