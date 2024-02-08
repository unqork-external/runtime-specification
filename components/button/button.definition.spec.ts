import { ButtonComponentDefinition } from './button.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Button Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ButtonComponentDefinition)

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
        description: 'Button component type.',
        const: 'button',
        examples: ['button'],
      },
      useSimpleView: {
        default: false,
        type: 'boolean',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/ButtonField' },
      display: { $ref: '#/definitions/Display' },
      interactions: { $ref: '#/definitions/Interactions' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      left: {
        description: 'Fully qualified child keys for adornments in the left slot. Maintained by nestable api.',
        type: 'array',
      },
      nestables: {
        $ref: '#/definitions/NestableDef',
      },
      right: {
        description: 'Fully qualified child keys for adornments in the right slot. Maintained by nestable api.',
        type: 'array',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      adornments: { $ref: '#/definitions/StandardAdornmentsProperties' },
      oneClickOnly: {
        default: false,
        description: 'control button disabled state when firing triggers/events',
        type: 'boolean',
      },
      preventDisableOnSubmitting: {
        default: false,
        description: 'control button disabled state when a submission is created',
        type: 'boolean',
      },
      disableOnInvalidForms: {
        type: 'boolean',
        description: 'If true, the button will be disabled if the forms are invalid.',
        default: false,
      },
      stepPath: { type: 'string', description: 'The goto step path for workflow.' },
      domEvents: { $ref: '#/definitions/DomEvents' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
