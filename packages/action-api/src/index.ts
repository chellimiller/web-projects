/**
 * Function to execute an action.
 */
export type ActionExecutor = () => void

/**
 * Describes the severity of an action. Allows differentiation between most actions and potentially dangerous actions.
 */
export enum ActionSeverityType {
  /** Applies to most actions. */
  STANDARD = 'STANDARD',
  /** Taking this action could potentially have negative consequences. For example, deleting an object. */
  DANGER = 'DANGER',
}

/**
 * An action that can be executed by the click of a button or with another component.
 */
export type Action = {
  /**
   * Name of the action. This would appear on the button.
   */
  name: string

  /**
   * Description of the action. This would appear on a tooltip.
   */
  description: string

  /**
   * Function to execute the action. If this is undefined, the button should be disabled.
   */
  execute?: ActionExecutor

  /**
   * Severity of action. If not provided, `ActionSeverityType.STANDARD` should be assumed.
   */
  severity?: ActionSeverityType
}
