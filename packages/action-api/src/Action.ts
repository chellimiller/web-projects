import { ActionExecutor } from './ActionExecutor'
import { ActionSeverityType } from './ActionSeverityType'

/**
 * An action that can be executed by the click of a button or with another component.
 */
export type Action<DATA, ERROR> = {
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
  execute?: ActionExecutor<DATA, ERROR>

  /**
   * Severity of action. If not provided, `ActionSeverityType.STANDARD` should be assumed.
   */
  severity?: ActionSeverityType
}
