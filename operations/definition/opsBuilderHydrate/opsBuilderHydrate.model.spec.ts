import { OpsBuilderHydrateOperation } from './opsBuilderHydrate.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: OpsBuilderHydrate Tests', () => {
  it('OpsBuilderHydrate Model', () => {
    const { schema } = generateSchemaAndValidate(OpsBuilderHydrateOperation)

    expect(schema).toMatchSnapshot()
  })
})
