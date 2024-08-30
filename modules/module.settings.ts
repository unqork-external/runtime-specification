import { Example, Optional, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../decorators'

@TrimmedDescription(`Module Settings`)
export class ModuleSettings {
  @Required()
  @TrimmedDescription(`
   Use legacy wrapper for centauri modules or workflows.
  `)
  useLegacyWrapper: 'module' | 'workflow'

  @Required()
  @TrimmedDescription(`
   Add in preview bar when not in production.
  `)
  usePreviewBar: boolean

  @Optional()
  @TrimmedDescription(`
   The Runtime version.
  `)
  runtimeVersion?: '1.0.0' | '2.0.0'

  @Optional()
  @TrimmedDescription(`
   Allow anonymous access.
  `)
  enableAnonymous?: boolean

  @Optional()
  @Example('Welcome Page')
  @TrimmedDescription(`
   When "Show Page Title" is turned on in module settings,
   the value in Page Title will be visible in the browser tab appending the Site Name
  `)
  pageTitle?: string
}
