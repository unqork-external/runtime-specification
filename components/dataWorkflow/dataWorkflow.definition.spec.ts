import { DataWorkflowComponentDefinition } from './dataWorkflow.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Data Workflow Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DataWorkflowComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
