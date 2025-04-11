import { Const, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { AddressSearchStyling } from './addressSearch.styling'
import { AddressSearchDisplay } from './addressSearchDisplay.definition'
import { AddressSearchField } from './addressSearchField.definition'
import { AddressSearchOptions } from './addressSearchOptions.definition'
import { AddressSearchTargets } from './addressSearchTargets.enum'
import { AddressSearchValue } from './addressSearchValue.definition'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('addressSearch')
@ViewTargets(AddressSearchTargets)
export class AddressSearchComponentDefinition extends BaseComponentDefinition {
  @Const('addressSearch')
  type: 'addressSearch' = 'addressSearch' as const

  @Optional()
  display: AddressSearchDisplay = new AddressSearchDisplay()

  @Optional()
  field: AddressSearchField = new AddressSearchField()

  @Required()
  options: AddressSearchOptions

  @Description('Value of the address search field.')
  declare value?: AddressSearchValue

  @Optional()
  declare signals?: SignalTargets<AddressSearchTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: AddressSearchStyling
}

export class AddressSearchComponentState extends AddressSearchComponentDefinition {
  @Optional()
  @Description('The address suggestions returned from the api call.')
  searchOptionData?: any[]

  @Optional()
  @Description('The search query')
  searchQuery?: string
}
