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
    expect(schema).toMatchSnapshot()
  })
})
