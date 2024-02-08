import { Description, Property } from '@tsed/schema'

export class DomEvents {
  @Property(Date)
  @Description('The date when is button last clicked.')
  lastClicked?: Date
}
