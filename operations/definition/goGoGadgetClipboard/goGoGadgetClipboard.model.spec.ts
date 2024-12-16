import { GoGoGadgetClipboardOperation } from './goGoGadgetClipboard.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: GoGoGadgetClipboard Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(GoGoGadgetClipboardOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match the basic schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
