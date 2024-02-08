import { Required } from '@tsed/schema'

/**
 * Handles PreRequestTransform
 */
export class PreRequestTransform {
  @Required()
  formId: string
  @Required()
  name: string
}
