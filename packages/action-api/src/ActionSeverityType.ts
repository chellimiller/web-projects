/**
 * Describes the severity of an action. Allows differentiation between most actions and potentially dangerous actions.
 */
export enum ActionSeverityType {
  /** Applies to most actions. */
  STANDARD = 'STANDARD',
  /** Taking this action could potentially have negative consequences. For example, deleting an object. */
  DANGER = 'DANGER',
}
