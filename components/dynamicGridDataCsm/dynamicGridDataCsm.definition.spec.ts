import { DynamicGridDataCsmComponentDefinition } from './dynamicGridDataCsm.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('DynamicGridDataCsm Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(DynamicGridDataCsmComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
