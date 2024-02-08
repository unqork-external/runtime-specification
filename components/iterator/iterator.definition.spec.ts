import { IteratorComponentDefinition } from './iterator.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Iterator Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(IteratorComponentDefinition)

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
        type: 'string',
        minLength: 1,
        const: 'iterator',
        description: 'Describes which kind of component the creator intends to build.',
        examples: ['iterator'],
      },
      components: {
        type: 'array',
        items: { $ref: '#/definitions/BaseComponentDefinition' },
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/IteratorField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Standard nestable implementation',
      },
      value: {
        type: 'array',
        items: { default: [] },
        description: 'The values that will be iterated over',
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      options: { $ref: '#/definitions/IteratorOptions' },
      rows: {
        type: 'array',
        items: { default: [] },
        description: 'Child IDs for nestable references',
      },
      displayRows: {
        type: 'array',
        items: { default: [] },
        description: 'Nested child IDs for rendering',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
