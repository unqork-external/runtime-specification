import { Description, Example } from '@tsed/schema'

/**
 * Nested application context is leveraged when we want to make sure that nested imported modules send the appropriate
 *  id and version information to the backend so that the calls can be resolved correctly.
 */
export class NestedApplicationContext {
  @Example('61bbaa60a09767a9404079dc')
  @Description('Appropriate application Id for an imported/nested module')
  applicationId: string

  @Example('4.4.4')
  @Description('Appropriate application version for an imported/nested module')
  applicationVersion: string
}
