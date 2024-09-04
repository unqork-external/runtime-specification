import { createExamples } from '../../../utilities'

export const signalOptionsExamples = createExamples({
  standardExamples: [
    { label: 'On Blur', value: 'onBlur', description: 'Occurs when an input component has lost focus.' },
    { label: 'On Click', value: 'onClick', description: 'Occurs on click of any UI component that is not disabled.' },
  ],
  nlpExamples: [
    {
      prompt: 'I want to build a component with signal types',
      response: {
        type: 'operationsBuilder',
        signalTypes: [
          { label: 'On Blur', value: 'onBlur', description: 'Occurs when an input component has lost focus.' },
          {
            label: 'On Click',
            value: 'onClick',
            description: 'Occurs on click of any UI component that is not disabled.',
          },
        ],
      },
    },
  ],
})
