import { Default, Description, Enum, Example } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ButtonSize, ButtonTheme, ButtonType } from '../../base-types/button'

export class ButtonOptions {
  @Description(
    'Button type attribute applied to the HTML element; dynamically determined based on the Button action type.',
  )
  @Enum(ButtonType)
  @Default(ButtonType.BUTTON)
  @Example(ButtonType.BUTTON, ButtonType.RESET)
  buttonType: ButtonType = ButtonType.BUTTON

  @TrimmedDescription(`
    If true, Button's width adjusts based on the length of its Label Text. 
    If false, Button's width is the full width of the page or column, with the Label Text centered.
  `)
  @Default(false)
  isWidthBlock: boolean = false

  @Description('Button size. Options include: XS, SM, MG, LG')
  @Enum(ButtonSize)
  @Default(ButtonSize.MD)
  @Example(ButtonSize.LG, ButtonSize.MD, ButtonSize.SM, ButtonSize.XS)
  size: ButtonSize = ButtonSize.MD

  @TrimmedDescription(`
    Sets the visual appearance of the Button. 
    Options include: Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, and Link.
  `)
  @Enum(ButtonTheme)
  @Default(ButtonTheme.PRIMARY)
  @Example(ButtonTheme.PRIMARY)
  theme: ButtonTheme = ButtonTheme.PRIMARY

  @Description("A CSS class for icons to the left of your Button's Label Text.")
  @Example('fa fa-desktop')
  leftIcon?: string

  @Description("A CSS class for icons to the right of your Button's Label Text.")
  @Example('fa fa-plus')
  rightIcon?: string
}
