/* eslint-disable max-len */
import { HtmlElementDefinition } from './htmlElement.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('HTML Element Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(HtmlElementDefinition)

    expect(schema.required).toEqual(['key', 'type', 'content'])
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
        const: 'htmlelement',
        description: 'Name of the type of component.',
        examples: ['htmlelement'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      display: { $ref: '#/definitions/Display' },
      field: {
        $ref: '#/definitions/Field',
      },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      content: {
        type: 'string',
        description: 'The HTML content to be rendered. Please review our allow lists for renderable HTML content.',
        minLength: 1,
      },
      tag: {
        type: 'string',
        description:
          'The HTML Element Tag with which the content will render. Please review our allow lists for possible HTML tags.',
        examples: ['h1', 'p', 'div'],
      },
      attributes: {
        type: 'array',
        items: { $ref: '#/definitions/AttrObject' },
        description:
          'The HTML attributes that apply to the top level tag. Please review our allow lists for possible HTML attributes.',
        examples: [
          '\n' + '    {\n' + '      htmlAttribute: "alt",\n' + '      value: "Alternative text"\n' + '    }\n' + '  ',
        ],
      },
      className: {
        type: 'string',
        description: "The classes applied to the rendered HTML Element's parent container.",
      },
      customClass: {
        type: 'string',
        description: 'The classes applied to the rendered HTML Element.',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
