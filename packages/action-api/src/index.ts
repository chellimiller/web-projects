/**
 * Function to execute an action.
 */
export type ActionExecutor = () => void

/**
 * Helps describe how the button or other component for the action should be displayed.
 */
export type ActionType = 'standard' | 'primary' | 'warning' | 'danger'

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
   * Type of the action. Defines how the action should be displayed.
   */
  type?: ActionType
}
