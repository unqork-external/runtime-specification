import { SimpleSelectOptionComponentDefinition } from './simpleSelectOption.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('SimpleSelectOption Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SimpleSelectOptionComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
