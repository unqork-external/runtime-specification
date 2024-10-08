import { Description, Required } from '@tsed/schema'

export class ExternalComponentRef {
  @Required()
  @Description('Key of external component')
  key: string

  @Required()
  @Description('Type of external component')
  type: string
}
