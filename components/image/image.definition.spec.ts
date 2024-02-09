import { ImageComponentDefinition } from './image.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Image Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ImageComponentDefinition)

    expect(schema.required).toEqual(['key', 'type', 'size', 'sourceUrl'])
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
        const: 'image',
        description: 'Name of the type of component.',
        examples: ['image'],
      },
      field: { $ref: '#/definitions/UdViewBasicField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      alternativeText: {
        type: 'string',
        description:
          'Alternative Text represents the visual description of the image in text for assistive technologies.',
      },
      size: { $ref: '#/definitions/ImageSize' },
      sourceUrl: {
        type: 'string',
        description: 'Source URL represents the URL of the image.',
        minLength: 1,
      },
      styling: {
        $ref: '#/definitions/ImageStyling',
      },
    })
  })
})
