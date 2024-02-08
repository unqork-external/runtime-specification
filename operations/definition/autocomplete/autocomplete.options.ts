import { Default, Description, Required } from '@tsed/schema'

class SearchData {
  @Required()
  targetKey: string

  @Default('value')
  property?: string = 'value'
}

class Query {
  @Required()
  @Description(`
    Use JSONPath to search through the data for your intended options.
  `)
  jsonPath: string
}

class Output {
  @Required()
  targetKey: string

  @Default('value')
  property?: string = 'value'
}

export class AutocompleteOperationOptions {
  @Required()
  targetKey: string

  @Default('value')
  property?: string = 'value'

  @Required()
  @Description(`
    The data intended to be searched. The intended search data may be Array or JSON.
    Use the Query object in order to select the relevant data to look through.
  `)
  searchData: SearchData

  @Required()
  @Description(`
    The query string used to inspect the data. Only supports JSON Path right now.
  `)
  query: Query

  @Required()
  @Description(`
    \`outputData\` describes where the data should be stored after autocomplete finishes its fuzzy matches.
  `)
  outputData: Output
}
