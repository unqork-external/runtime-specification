import { Description, Example } from '@tsed/schema'

/**
 * Nested application context is leveraged when we want to make sure that nested imported modules send the appropriate
 *  id and version information to the backend so that the calls can be resolved correctly.
 */
export class NestedApplicationContext {
  @Example('v61bbaa60a09767a9404079dc')
  @Description('Appropriate context for an imported/nested module')
  nestedContext: string
}
