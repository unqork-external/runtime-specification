import { SetComponentStateOperation } from './setComponentState.model'
import { generateSchemaAndValidate, trimAll } from '../../../../utilities'

describe('Operation Model: SetComponentState Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetComponentStateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        type: { type: 'string', const: 'SET_COMPONENT_STATE', examples: ['SET_COMPONENT_STATE'] },
        options: { $ref: '#/definitions/SetComponentStateOperationOptions' },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        creatorSummary: {
          description: 'A detailed summary of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      definitions: {
        SetComponentStateOperationOptions: {
          type: 'object',
          properties: {
            targetKey: {
              type: 'string',
              description: 'targetKey refers to the intended target to manipulate.',
              examples: ['firstNameTextField'],
              minLength: 1,
            },
            value: {
              type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
              description: 'The value refers to the intended value to mutate the intended targetKey to.',
            },
            override: {
              type: 'boolean',
              description: trimAll(`override refers to the type of behavior that SET_COMPONENT_STATE should emulate. 
                If true, SET_COMPONENT_STATE will check if the targetKey's value is set, if so, will overwrite the value of the targetKey in state components. Otherwise set the targetKey with value as a new field. 
                If false, SET_COMPONENT_STATE will only update value of targetKey.`),
              default: false,
            },
          },
          required: ['targetKey'],
        },
      },
    })
  })
})
