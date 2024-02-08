import { SetModalOperation } from './setModal.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('setModal', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetModalOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        SetModalOptions: {
          properties: {
            modalAction: {
              description: 'modalAction refers to the event that the modal should execute.',
              examples: ['MODAL_CLOSE_KEY', 'MODAL_OPEN_KEY'],
              minLength: 1,
              type: 'string',
            },
            targetEventKey: {
              type: 'string',
            },
            targetKey: {
              description: 'The key or path to the container we intend to target for an operation',
              type: 'string',
            },
          },
          required: ['modalAction'],
          type: 'object',
        },
      },
      properties: {
        options: {
          $ref: '#/definitions/SetModalOptions',
        },
        type: {
          const: 'SET_MODAL',
          examples: ['SET_MODAL'],
          type: 'string',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })

  it('should validate submit operation with all required keys', () => {
    const op = createOperation(OperationTypes.SET_MODAL, {
      modalAction: 'MODAL_CLOSE_KEY',
      targetEventKey: '1',
      targetKey: '1',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should error if no modalAction is provided', () => {
    //@ts-ignore
    const op = createOperation(OperationTypes.SET_MODAL, {})

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
