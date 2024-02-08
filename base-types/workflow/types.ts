export type Step = {
  currentStep: boolean
  name: string
  path: string
  percentage: number
  percentageForGroup: number
  navigationState: Record<string, any>
  stepNumber: number
  stepNumberForGroup: number
  lastStep: boolean
}

export type WorkflowNavigation = {
  disableNavigationButtons: boolean
  displayType: string
  enableVerticalNavDisplay: boolean
  goto: boolean
  next: string
  prev: string
  path: string
  stateControlType: string
  step: Step
  steps: Step[]
}

export enum WorkflowNavigationActionType {
  NEXT = 'next',
  PREV = 'prev',
  GOTO = 'goto',
}
