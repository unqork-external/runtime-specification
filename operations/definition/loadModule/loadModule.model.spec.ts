import { LoadModuleOperation } from './loadModule.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: LoadModule Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(LoadModuleOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
