import { WorkflowComponentDefinition } from './workflow.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Workflow Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(WorkflowComponentDefinition)

    expect(schema.required).toEqual(['key', 'type', 'navigationSettings', 'workflowData'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. 
          It doesn't have to be unique across different modules. 
          Objects in the runtime use keys to target other components.
        `),
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        const: 'workflow',
        description: 'Name of the type of component.',
        examples: ['workflow'],
      },
      components: {
        type: 'array',
        items: { $ref: '#/definitions/BaseComponentDefinition' },
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable information for workflow',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      navigationSettings: { $ref: '#/definitions/WorkflowNavigationSettings' },
      workflowData: { $ref: '#/definitions/WorkflowData' },
      headerTitle: {
        type: 'string',
        description: 'Text for header that will span across the top of the page',
      },
      validationModalSettings: { $ref: '#/definitions/WorkflowValidationModalSettings' },
      saveAndExitAlertSettings: { $ref: '#/definitions/WorkflowSaveAndExitAlertSettings' },
      buttonSettings: { $ref: '#/definitions/WorkflowButtonSettings' },
      flashMessageSettings: { $ref: '#/definitions/WorkflowFlashMessageSettings' },
      validationErrors: { $ref: '#/definitions/WorkflowValidationErrors' },
      childIds: { type: 'array', description: 'Child ids for nestable references' },
      navigationInProgress: {
        default: false,
        description: 'workflow navigation loading state',
        type: 'boolean',
      },
      moduleWorkflowSettings: { $ref: '#/definitions/ModuleWorkflowSettings' },
      alertMessage: {
        description: 'Message to display in popup when page loads if incorrect step requested',
        type: 'string',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
