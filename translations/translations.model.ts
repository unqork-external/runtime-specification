import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'

type LanguageKey = string
type ReferenceKey = string
type TranslationString = string

/**
 * @example
 * // Spanish
 * {
 *   "submitButton": "Enviar"
 * }
 *
 * // English
 * {
 *   "submitButton": "Submit"
 * }
 */
type ReferenceToTranslation = Record<ReferenceKey, TranslationString>

export type TranslationMap = Record<LanguageKey, ReferenceToTranslation>

export class TranslationModel {
  @TrimmedDescription(`
    The \`translations\` key represents a top level language key like 'en' for English or 'sp' for spanish.
    Downstream of the language key object, we have reference keys that map to their respective translation string.
    The Runtime reads reference keys depending on the currently selected language to select the correct translation.
  `)
  translationMap: TranslationMap
}
