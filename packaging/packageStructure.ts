import type {
  BaseRepresentationDefinition,
  BaseSettingDefinition,
  BaseTrayItemDefinition,
} from '../../designer-specification'

export class PackageStructure {
  view: any
  container: any
  operations: any
  tray: BaseTrayItemDefinition
  settings: BaseSettingDefinition
  represnetation: BaseRepresentationDefinition
  types: any
}
