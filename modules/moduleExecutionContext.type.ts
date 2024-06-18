import type { ModuleDefinition } from './module.definition'

export type ModuleExecutionContext = {
  moduleDefinition: ModuleDefinition
  headerModuleDefinition?: ModuleDefinition
  footerModuleDefinition?: ModuleDefinition
}
