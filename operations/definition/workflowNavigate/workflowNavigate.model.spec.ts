import { WorkflowNavigateOperation } from './workflowNavigate.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: WorkflowNavigate Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(WorkflowNavigateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
        type: {
          type: 'string',
          const: 'WORKFLOW_NAVIGATE',
          examples: ['WORKFLOW_NAVIGATE'],
        },
        options: {
          $ref: '#/definitions/WorkflowNavigateOperationOptions',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SuccessMessageOptions: {
          properties: {
            confirmButtonText: {
              description: 'The confirmation button text for the success modal.',
              type: 'string',
            },
            successMessage: {
              description: 'The body text for the success modal.',
              type: 'string',
            },
          },
          type: 'object',
        },
        ValidationOptions: {
          properties: {
            confirmButtonText: {
              description: 'The confirmation button text for the error modal.',
              type: 'string',
            },
            errorMessage: {
              description: 'The body text for the error modal.',
              type: 'string',
            },
            errorTitle: {
              description: 'The title for the error modal.',
              type: 'string',
            },
          },
          type: 'object',
        },
        WorkflowTriggers: {
          properties: {
            postSaveTrigger: {
              description: 'postSaveTrigger is the component to trigger after a successful save submission is made.',
              type: 'string',
            },
            preErrorTrigger: {
              description: 'preErrorTrigger is the component to trigger before the validation action runs.',
              type: 'string',
            },
            preSaveTrigger: {
              description: 'preSaveTrigger is the component to trigger concurrently when saving submission is made.',
              type: 'string',
            },
          },
          type: 'object',
        },
        WorkflowNavigateOperationOptions: {
          type: 'object',
          properties: {
            action: {
              type: 'string',
              enum: ['next', 'prev', 'goto'],
              description: 'Workflow navigation action type.',
              minLength: 1,
            },
            targetStep: {
              type: 'string',
              examples: ['some step', 'step 2'],
              description: "Workflow target step, only applicable to 'goto'.",
            },
            validationOptions: {
              $ref: '#/definitions/ValidationOptions',
            },
            successMessageOptions: {
              $ref: '#/definitions/SuccessMessageOptions',
            },
            triggers: {
              $ref: '#/definitions/WorkflowTriggers',
            },
            targetKey: {
              type: 'string',
              description: 'The key or path to the container we intend to target for an operation',
            },
          },
          required: ['action'],
        },
      },
    })
  })
})
