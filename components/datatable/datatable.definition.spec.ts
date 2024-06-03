import { DataTableDefinition } from './datatable.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Data Table Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DataTableDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should be an object array', () => {
    const { validate } = generateSchemaAndValidate(DataTableDefinition)

    const def = new DataTableDefinition()
    def.key = '1'
    def.headers = ['solo column']
    def.value = [{}, {}]

    validate(def)
    expect(validate.errors).toBeNull()
  })
})
