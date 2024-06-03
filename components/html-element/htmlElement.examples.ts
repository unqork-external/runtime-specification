import { createExamples } from '../../../utilities'

export const htmlAttributeExamples = createExamples({
  standardExamples: ['alt', 'title'],
  nlpExamples: [
    {
      prompt: 'I want to build an Html Element component whose tag has an "alt" attribute',
      response: {
        type: 'htmlelement',
        attributes: [
          {
            htmlAttribute: 'alt',
          },
        ],
      },
    },
  ],
})

export const valueExamples = createExamples({
  standardExamples: ['Alternative text', 'Any other text'],
  nlpExamples: [
    {
      prompt:
        'I want to build an Html Element component whose tag has an "alt" attribute and it\'s value "Alternative text"',
      response: {
        type: 'htmlelement',
        attributes: [
          {
            htmlAttribute: 'alt',
            value: 'Alternative text',
          },
        ],
      },
    },
  ],
})

export const tagExamples = createExamples({
  standardExamples: ['h1', 'p', 'div'],
  nlpExamples: [
    {
      prompt: 'I want to build an Html Element component whose content is contains an h1 tag',
      response: {
        type: 'htmlelement',
        tag: 'h1',
      },
    },
  ],
})

export const attributesExamples = createExamples({
  standardExamples: [
    {
      htmlAttribute: 'alt',
      value: 'Alternative text',
    },
  ],
  nlpExamples: [
    {
      prompt:
        'I want to build an Html Element component whose tag has an "alt" attribute and it\'s value "Alternative text"',
      response: {
        type: 'htmlelement',
        attributes: [
          {
            htmlAttribute: 'alt',
            value: 'Alternative text',
          },
        ],
      },
    },
  ],
})
