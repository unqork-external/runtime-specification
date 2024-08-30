import { WorkflowSaveAndExitOperation } from './workflowSaveAndExit.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: WorkflowSaveAndExit Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(WorkflowSaveAndExitOperation)
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
          const: 'WORKFLOW_SAVE_AND_EXIT',
          examples: ['WORKFLOW_SAVE_AND_EXIT'],
        },
        options: {
          $ref: '#/definitions/WorkflowSaveAndExitOperationOptions',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SaveAndExitAlertSetting: {
          properties: {
            confirmButtonText: {
              description: 'The confirmation button text for save and exit modal.',
              type: 'string',
            },
            cancelButtonText: {
              description: 'The cancel button text for save and exit modal.',
              type: 'string',
            },
            saveAndExitMessage: {
              description: 'message for save and exit modal',
              type: 'string',
            },
          },
          type: 'object',
        },
        WorkflowSaveAndExitOperationOptions: {
          properties: {
            currentStepPath: {
              description: 'current step of the workflow',
              minLength: 1,
              type: 'string',
            },
            saveAndExitAlertSetting: {
              $ref: '#/definitions/SaveAndExitAlertSetting',
            },
          },
          required: ['currentStepPath'],
          type: 'object',
        },
      },
    })
  })
})
