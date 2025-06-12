import { KpiComponentDefinition } from './kpi.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Kpi Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(KpiComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
