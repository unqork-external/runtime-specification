import { UdMultiSelectComponentDefinition } from './udMultiSelect.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Multi Select Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdMultiSelectComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
