import { getJsonSchema } from '@tsed/schema'
import Ajv2020 from 'ajv/dist/2020'

import { BaseComponentDefinition } from './base.component.definition'
import { generateSchemaAndValidate, trimAll } from '../../utilities'
import { OperationTypes } from '../operations'

describe('Vega Base Component Interface Validation', () => {
  // We must use Ajv2020 to access certain JSON Schema features (e.g. dependentRequired)
  let ajv!: Ajv2020
  beforeEach(() => {
    ajv = new Ajv2020({ allErrors: true, discriminator: true })
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
    def.eventHandlers = {
      BLUR: {
        operations: [
          {
            type: OperationTypes.SET_PROPERTY,
            options: {},
          },
        ],
      },
    }
    const schema = getJsonSchema(BaseComponentDefinition)
    const validate = ajv.compile(schema)

    validate(def)
  })

  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(BaseComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description:
          // eslint-disable-next-line max-len
          "'key' is the user-defined, unique identifier for a component within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.",
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        description: 'Name of the type of component.',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
    })
  })
})
