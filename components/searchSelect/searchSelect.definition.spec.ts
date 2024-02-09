import { SearchSelectComponentDefinition } from './searchSelect.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('SearchSelect Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SearchSelectComponentDefinition)

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
        const: 'searchSelect',
        description: 'Name of the type of component.',
        examples: ['searchSelect'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/SearchSelectField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable definitions for simpleSelect component',
      },
      value: { type: 'object', description: 'Value of the simpleSelect' },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      useSimpleView: { type: 'boolean' },
      simpleView: { $ref: '#/definitions/SearchSelectSimpleViewModel' },
      options: {
        type: 'array',
        items: { $ref: '#/definitions/SearchSelectOptionComponentDefinition' },
        description: 'Nested option component definition.',
      },
      optionKeys: {
        type: 'array',
        description: 'Fully qualified child keys for options nestables. Maintained by nestable api.',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
