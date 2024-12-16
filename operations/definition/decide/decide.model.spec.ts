import { DecideOperation } from './decide.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: DecideOperation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(DecideOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
