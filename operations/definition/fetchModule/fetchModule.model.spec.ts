import { FetchModuleOperation } from './fetchModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: FetchModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(FetchModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
