import { TextFieldComponentDefinition } from './textfield.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Textfield Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TextFieldComponentDefinition)

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
        description: 'Type of the component.',
        const: 'textfield',
        examples: ['textfield'],
      },
      useSimpleView: {
        default: false,
        type: 'boolean',
      },
      simpleView: {
        $ref: '#/definitions/TextfieldSimpleViewModel',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/InputField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/TextFieldValidation' },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
        description: trimAll(`
          An object that maps a Runtime Event to a list of operations. 
          Besides the default supported events, this object can also hold custom event handlers, 
          for example, when a Watcher is attached to the field.
        `),
        examples: [
          `The snippet below defines a handler for the textfield's blur event
      and will set an element identified by 'another-element' to hidden when that happens
      {
        eventHandlers: {
          BLUR: {
            operations: [ 
              type: SET_PROPERTY,
              options: {
                value: false,
                targetKey: 'another-element',
                property: 'display.hidden',
              },  
            ]
          }
        }
      }`.trim(),
        ],
        type: 'object',
      },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      left: {
        description: 'Fully qualified child keys for adornments in the left slot. Maintained by nestable api.',
        type: 'array',
      },
      nestables: {
        description: [
          'Nestable definitions for adorned textfield component.',
          'NOTE: This are currently only rendered within grid, even though',
          `they're designed to be uniform across all textfields and will be implemented there at a later date`,
        ].join(' '),
        type: 'object',
      },
      right: {
        description: 'Fully qualified child keys for adornments in the right slot. Maintained by nestable api.',
        type: 'array',
      },
      value: { type: 'string', description: 'Value of the textfield. A textfield always stores its data as a string.' },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      adornments: { $ref: '#/definitions/TextfieldAdornments' },
      format: { $ref: '#/definitions/TextFieldFormat' },
      styling: {
        $ref: '#/definitions/TextfieldStyling',
      },
    })
  })
})
