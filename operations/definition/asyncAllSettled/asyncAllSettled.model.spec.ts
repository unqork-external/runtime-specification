import { AsyncAllSettledOperation } from './asyncAllSettled.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Operation Model: AsyncAllSettled Tests', () => {
  let validate, schema

  beforeAll(() => {
    const response = generateSchemaAndValidate(AsyncAllSettledOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })

  it('should fail validate when operations list is empty', () => {
    const op = createOperation(OperationTypes.ASYNC_ALL_SETTLED, {
      operations: [],
    })

    expect(validate(op)).toBeFalse()
  })
})
