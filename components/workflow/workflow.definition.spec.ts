import { WorkflowComponentDefinition, WorkflowComponentState } from './workflow.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Workflow Contract Tests', function () {
  it('should ensure the contract is clear - component defintion', function () {
    const { schema } = generateSchemaAndValidate(WorkflowComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(WorkflowComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
