import { SearchSelectOptionComponentDefinition } from './searchSelectOption.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('SearchSelectOption Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SearchSelectOptionComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        description:
          // eslint-disable-next-line max-len
          `A user-defined key that is unique within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.`,
        minLength: 1,
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        const: 'searchSelectOption',
        description: 'Name of the type of component.',
        examples: ['searchSelectOption'],
      },
      field: { $ref: '#/definitions/Field' },
      display: { $ref: '#/definitions/Display' },
      executable: {
        type: 'boolean',
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        default: true,
      },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable definitions for the component',
      },
      value: {
        description: 'Value of the component',
        type: 'string',
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      adornments: { $ref: '#/definitions/OptionAdornments' },
      left: {
        type: 'array',
        description: 'Fully qualified child keys for left icon nestables. Maintained by nestable api.',
      },
      right: {
        type: 'array',
        description: 'Fully qualified child keys for right icon nestables. Maintained by nestable api.',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
