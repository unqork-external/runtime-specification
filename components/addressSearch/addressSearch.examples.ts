import { createExamples } from '../../../utilities'

export const countryFilterExample = createExamples({
  standardExamples: ['country:US', 'country:US|country:PR|country:VI|country:GU|country:MP'],
})

export const locationExample = createExamples({
  standardExamples: ['37.76999, -122.44696'],
})

export const countryISOExample = createExamples({
  standardExamples: ['CA'],
})

export const countryNameExample = createExamples({
  standardExamples: ['Canada'],
})
