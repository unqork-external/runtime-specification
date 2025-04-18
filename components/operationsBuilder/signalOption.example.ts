import { createExamples } from '../../../utilities'

export const signalOptionsExamples = createExamples({
  standardExamples: [
    { label: 'On Blur', value: 'onBlur', description: 'When input component loses focus' },
    { label: 'On Click', value: 'onClick', description: 'When a non-disabled UI component is clicked by the user' },
  ],
  nlpExamples: [
    {
      prompt: 'I want to build a component with signal types',
      response: {
        type: 'operationsBuilder',
        signalTypes: [
          { label: 'On Blur', value: 'onBlur', description: 'When input component loses focus' },
          {
            label: 'On Click',
            value: 'onClick',
            description: 'When a non-disabled UI component is clicked by the user',
          },
        ],
      },
    },
  ],
})
