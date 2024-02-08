import { Default, Description, Enum, Property } from '@tsed/schema'

import { ButtonSize, ButtonTheme, ButtonType } from '../../base-types/button'
import { Field, Label } from '../../componentComposition/field/component.field.label'

export class ButtonLabel extends Label {
  @Description('Button label text.')
  text: string = 'Submit'
}

export class ButtonStyle {
  @Default(false)
  @Description('If true, button width is block. If false, button width is fixed.')
  isWidthBlock: boolean = false

  @Enum(ButtonTheme)
  @Default(ButtonTheme.PRIMARY)
  @Description('Button theme.')
  theme: ButtonTheme = ButtonTheme.PRIMARY

  @Enum(ButtonSize)
  @Default(ButtonSize.MD)
  @Description('Button size.')
  size: ButtonSize = ButtonSize.MD

  @Description('Button left icon class.')
  leftIcon?: string

  @Description('Button right icon class.')
  rightIcon?: string

  @Description('Button custom class.')
  customClass?: string

  @Enum(ButtonType)
  @Default(ButtonType.BUTTON)
  @Description('Button type on the html element.')
  buttonType: ButtonType = ButtonType.BUTTON
}

export class ButtonField extends Field {
  @Property(ButtonLabel)
  @Description('Button label settings.')
  label: ButtonLabel = new ButtonLabel()

  @Property(ButtonStyle)
  @Description('Button style settings.')
  style: ButtonStyle = new ButtonStyle()

  @Description(`
    Button custom class.
    // TODO: Deprecate when operation targets styles.className instead
    // and all components implement same interface
  `)
  customClass?: string
}
