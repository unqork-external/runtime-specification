import { NumberRangeComponentDefinition } from './numberRange.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Number Range Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(NumberRangeComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
