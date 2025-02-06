import { Default, Description } from '@tsed/schema'

export type SUPPORTED_LANGUAGES = 'json' | 'xml' | 'njk' | 'default'

export class CodeEditorFormat {
  @Description('Tab size for code editor')
  tabSize: number = 2

  @Description('Language type')
  language: SUPPORTED_LANGUAGES = 'default'

  @Description(`If true, attempts to format values received by the editor as JSON,
   regardless of the language type`)
  @Default(false)
  prettifyJson: boolean = false
}
