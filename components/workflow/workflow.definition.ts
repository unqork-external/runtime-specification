import {
  Required,
  DiscriminatorValue,
  Description,
  Const,
  Property,
  Default,
  Optional,
  CollectionOf,
} from '@tsed/schema'

import {
  ModuleWorkflowSettings,
  WorkflowButtonSettings,
  WorkflowData,
  WorkflowFlashMessageSettings,
  WorkflowNavigationSettings,
  WorkflowValidationModalSettings,
  WorkflowSaveAndExitAlertSettings,
  WorkflowValidationErrors,
} from './settings'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { StandardArrayNestable } from '../../nestables'
@DiscriminatorValue('workflow')
export class WorkflowComponentDefinition extends BaseComponentDefinition {
  @Const('workflow')
  type: 'workflow' = 'workflow' as const

  @Required()
  @Property(WorkflowNavigationSettings)
  @Description('Settings that control the display of the current WF')
  navigationSettings: WorkflowNavigationSettings

  @Required()
  @Property(WorkflowData)
  @Description('Basic information about the workflow currently being previewed')
  workflowData: WorkflowData

  @Description('Text for header that will span across the top of the page')
  headerTitle?: string

  @Property(WorkflowValidationModalSettings)
  @Description(
    'Settings for validation modal that appears when errors are encountered during a workflow navigation attempt',
  )
  validationModalSettings = new WorkflowValidationModalSettings()

  @Property(WorkflowSaveAndExitAlertSettings)
  @Description('Settings for the Save and Exit alert that appears when the Save and Exit button is clicked')
  saveAndExitAlertSettings = new WorkflowSaveAndExitAlertSettings()

  @Property(WorkflowButtonSettings)
  @Description('Settings for the Workflow Navigation buttons')
  buttonSettings = new WorkflowButtonSettings()

  @Property(WorkflowFlashMessageSettings)
  @Description('Settings for flash message that should appear when the workflow component is first loaded.')
  flashMessageSettings = new WorkflowFlashMessageSettings()

  @Property(WorkflowValidationErrors)
  @Description('Validation errors for invalid navigation panels in a nav group')
  validationErrors = new WorkflowValidationErrors()

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(ModuleWorkflowSettings)
  @Description('Triggers on workflow navigation')
  moduleWorkflowSettings? = new ModuleWorkflowSettings()

  @Default(false)
  @Description('workflow navigation loading state')
  navigationInProgress: boolean = false

  @Optional()
  @Description('Message to display in popup when page loads if incorrect step requested')
  alertMessage?: string

  @Description('Nestable information for workflow')
  nestables = { childIds: new StandardArrayNestable() }
}

export class WorkflowComponentState extends WorkflowComponentDefinition {
  @Description('Child ids for nestable references')
  childIds: string[] = []
}

export * from './settings'
