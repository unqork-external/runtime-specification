import { TryCatchOperation } from './tryCatch.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: Try Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TryCatchOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
