import { FocusOperation } from './focus.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: FocusOperation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(FocusOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
