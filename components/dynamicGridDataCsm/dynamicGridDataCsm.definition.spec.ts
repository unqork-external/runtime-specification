import {
  DynamicGridDataCsmComponentDefinition,
  DynamicGridDataCsmComponentState,
} from './dynamicGridDataCsm.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('DynamicGridDataCsm Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(DynamicGridDataCsmComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })

  it.skip('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(DynamicGridDataCsmComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
