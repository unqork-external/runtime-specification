import { Default, Description, Enum, Optional, Property } from '@tsed/schema'

export enum PositionAriaRoleType {
  ALERT = 'alert',
  ALERTDIALOG = 'alertdialog',
  DIALOG = 'dialog',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  MODALDIALOG = 'dialog',
  MENU = 'menu',
  POPUP = 'popup',
  PRESENTATION = 'presentation',
  STATUS = 'status',
  TOOLTIP = 'tooltip',
}

export enum PositionAlignmentType {
  START = 'start',
  CENTER = 'center',
  END = 'end',
}

export enum PositionDirectionType {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  CENTER = 'center',
}

export enum PositionStrategyType {
  ABSOLUTE = 'absolute',
  FIXED = 'fixed',
}

const DEFAULT_VALUES = {
  role: PositionAriaRoleType.PRESENTATION,
  direction: PositionDirectionType.TOP,
}

export class PositionPlacement {
  @Optional()
  @Default(DEFAULT_VALUES.direction)
  @Description('Placement of positioned element in relation to the anchorElement')
  direction: PositionDirectionType = DEFAULT_VALUES.direction

  @Optional()
  @Enum(PositionAlignmentType)
  @Description('Alignment of positioned element in relation to the anchorElement')
  alignment?: PositionAlignmentType
}

export class PositionOptions {
  @Optional()
  @Description('Key of anchor component')
  anchorKey?: string

  @Optional()
  @Description('The component to trigger when the positioned element is closed')
  closedTrigger?: string

  @Optional()
  @Description('Custom CSS class for the Position component')
  customClass?: string

  @Optional()
  @Enum(PositionAriaRoleType)
  @Default(DEFAULT_VALUES.role)
  @Description('Aria Role of Position component')
  role?: PositionAriaRoleType = DEFAULT_VALUES.role

  @Optional()
  @Property(PositionPlacement)
  placement: PositionPlacement = new PositionPlacement()

  @Optional()
  @Description('Fallback placements that will be used when there is a direct collision')
  fallbackPlacements?: PositionPlacement[]

  @Optional()
  @Description('Distance (in px) between the positioned element and the anchor element')
  offset?: number

  @Optional()
  @Description('Distance (in px) between the positioned element and the alignment edge of the anchor element')
  alignmentOffset?: number

  @Optional()
  @Description('The component to trigger when the positioned element is opened')
  openedTrigger?: string

  @Optional()
  @Description('Whether the position should be closed when user clicks outside the child component')
  outsideDismiss?: boolean
}
