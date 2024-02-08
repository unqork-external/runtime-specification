import { Description, Required } from '@tsed/schema'

export class FetchModuleOperationOptions {
  @Required()
  @Description('Id that identifies module to fetch')
  moduleId: string

  // This can be removed once BaseOperationOperations is refactored.
  // https://unqork-jira.atlassian.net/browse/UN-27976
  targetKey?: never
}
