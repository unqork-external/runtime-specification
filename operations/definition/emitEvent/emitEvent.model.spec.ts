import { EmitEventOperation } from './emitEvent.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: EmitEvent Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(EmitEventOperation)
    validate = response.validate
    schema = response.schema
  })

  it('Reset operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.EMIT_EVENT, {
      targetKey: '',
      event: 'helloEvent',
      payload: {},
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
