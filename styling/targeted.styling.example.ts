import { createExamples } from '../../utilities'

export const targetedStylingExample = createExamples({
  standardExamples: [
    {
      styling: {
        targets: {
          root: ['very-fancy-custom-class', { color: 'red' }, 'another-custom-class'],
        },
      },
    },
  ],
  nlpExamples: [
    {
      prompt: `I want to be able to style the textfield component on root element with the style class 
      'very-fancy-custom-class',  with red color and another style class 'another-custom-class'`,
      response: [
        {
          key: 'yourGeneratedTextfield',
          type: 'textfield',
          styling: {
            targets: {
              root: ['very-fancy-custom-class', { color: 'red' }, 'another-custom-class'],
            },
          },
        },
      ],
    },
  ],
})
