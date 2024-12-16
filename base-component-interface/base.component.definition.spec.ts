import { getJsonSchema } from '@tsed/schema'
import Ajv2020 from 'ajv/dist/2020'

import { BaseComponentDefinition } from './base.component.definition'
import { EventType } from '../../events'
import { generateSchemaAndValidate } from '../../utilities'
import { OperationTypes } from '../operations'
import { EventScope } from '../signals'

describe('Vega Base Component Interface Validation', () => {
  // We must use Ajv2020 to access certain JSON Schema features (e.g. dependentRequired)
  let ajv!: Ajv2020
  beforeEach(() => {
    ajv = new Ajv2020({ allErrors: true, discriminator: true, strict: false })
  })

  it('should create a JSON schema from a component definition', () => {
    const schema = getJsonSchema(BaseComponentDefinition)
    expect(schema).toBeDefined()
  })

  it('should fail validation if no key or type', () => {
    const def = new BaseComponentDefinition()
    const schema = getJsonSchema(def)
    const validate = ajv.compile(schema)
    validate(def)
    const allMissingProperties = validate.errors?.map((err) => err.params.missingProperty)
    expect(allMissingProperties?.includes('key')).toBe(true)
    expect(allMissingProperties?.includes('type')).toBe(true)
  })

  it('should not fail if key is set, but should fail type is not set', () => {
    const def = new BaseComponentDefinition()
    def.key = 'exampleComponent'
    const schema = getJsonSchema(def)
    const validate = ajv.compile(schema)
    validate(def)
    const allMissingProperties = validate.errors?.map((err) => err.params.missingProperty)
    expect(allMissingProperties?.includes('key')).toBe(false)
    expect(allMissingProperties?.includes('type')).toBe(true)
  })

  it('should validate ops', () => {
    const def = new BaseComponentDefinition()
    def.key = 'test1'
    def.type = 'blank'
    def.signals = {
      root: [
        {
          id: 'rootSignal',
          type: EventType.ON_BLUR,
          operations: [
            {
              type: OperationTypes.SET_PROPERTY,
              options: {},
            },
          ],
          options: {
            eventScopes: [EventScope.Self],
          },
        },
      ],
    }
    const schema = getJsonSchema(BaseComponentDefinition)
    const validate = ajv.compile(schema)

    validate(def)
  })

  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(BaseComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
