import { IfOperation } from './if.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: If Tests', () => {
  it('test that the schema matches our expectations', () => {
    const response = generateSchemaAndValidate(IfOperation)
    const def = response.schema
    const d = {
      properties: def.properties,
      required: def.required,
      type: def.type,
    }
    const options = def.definitions.IfOperationOptions

    expect(options).toMatchSnapshot()

    expect(d).toMatchSnapshot()
  })
})
