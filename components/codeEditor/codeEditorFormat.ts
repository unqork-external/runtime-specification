import { Default, Description } from '@tsed/schema'

export type SUPPORTED_LANGUAGES = 'json' | 'xml' | 'njk' | 'default'

export class CodeEditorFormat {
  @Description('Tab size for code editor')
  tabSize: number = 2

  @Description('Language type')
  language: SUPPORTED_LANGUAGES = 'default'

  @Description('true if we want json to be formatted before we add it to code editor')
  @Default(false)
  prettifyJson: boolean = false
}
