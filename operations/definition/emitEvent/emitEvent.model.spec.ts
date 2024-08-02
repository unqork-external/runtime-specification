import { EmitEventOperation } from './emitEvent.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: EmitEvent Tests', () => {
  let validate
  beforeAll(() => {
    const response = generateSchemaAndValidate(EmitEventOperation)
    validate = response.validate
  })

  it('Reset operation should validate appropriately', () => {
    const op = createOperation(OperationTypes.EMIT_EVENT, {
      event: 'helloEvent',
      payload: {},
    })
    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })
})
