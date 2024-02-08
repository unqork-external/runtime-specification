import { deserialize } from '@tsed/json-mapper'

import { OperationsArray } from './operationsArray.definition'
import { generateSchemaAndValidate } from '../../utilities'
import { createOperation, OperationTypes, ResetOperation, SetPropertyOperation } from '../operations'

describe('Operation checks', () => {
  let validate, schema

  beforeAll(() => {
    const response = generateSchemaAndValidate(OperationsArray)
    validate = response.validate
    schema = response.schema
  })

  it('should validate disparate operations', () => {
    const ops = new OperationsArray()
    ops.operations = [
      createOperation(OperationTypes.SET_PROPERTY, {
        property: 'test1',
        targetKey: 'test1',
        value: '',
      }),
      createOperation(OperationTypes.RESET, {
        targetKey: 'test1',
      }),
      createOperation(OperationTypes.SET_PROPERTY, {
        property: 'test1',
        targetKey: 'test1',
        value: '',
      }),
    ]

    validate(ops)
    expect(validate.errors).toBe(null)
  })

  it('should deserialize disparate ops', () => {
    const ops = {
      operations: [
        createOperation(OperationTypes.SET_PROPERTY, {
          property: 'test1',
          targetKey: 'test1',
          value: '',
        }),
        createOperation(OperationTypes.RESET, {
          targetKey: 'test1',
        }),
        createOperation(OperationTypes.SET_PROPERTY, {
          property: 'test1',
          targetKey: 'test1',
          value: '',
        }),
      ],
    }

    const answer = deserialize<OperationsArray>(ops, { type: OperationsArray })

    expect(answer.operations.length).toBe(3)
    expect(answer.operations[0]).toBeInstanceOf(SetPropertyOperation)
    expect(answer.operations[1]).toBeInstanceOf(ResetOperation)
    expect(answer.operations[2]).toBeInstanceOf(SetPropertyOperation)
  })
})
