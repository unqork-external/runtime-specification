import { DataTableDefinition } from './datatable.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Data Table Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DataTableDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. 
          It doesn't have to be unique across different modules. 
          Objects in the runtime use keys to target other components.
        `),
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        description: 'Describes which kind of component the creator intends to build.',
        type: 'string',
        minLength: 1,
        const: 'datatable',
      },
      headers: {
        type: 'array',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: { description: 'Current value of the component', type: 'array' },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      initialData: { type: 'array' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })

  it('should be an object array', () => {
    const { validate } = generateSchemaAndValidate(DataTableDefinition)

    const def = new DataTableDefinition()
    def.key = '1'
    def.value = [{}, {}]

    validate(def)
    expect(validate.errors).toBeNull()
  })
})
