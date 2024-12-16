import { SetComponentStateOperation } from './setComponentState.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: SetComponentState Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetComponentStateOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
