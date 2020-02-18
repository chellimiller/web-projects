/**
 * The type of result that was returned.
 */
export enum ResultType {
  /**
   * Result was a success.
   */
  // eslint-disable-next-line no-unused-vars
  SUCCESS = 'success',
  /**
   * An error occurred.
   */
  // eslint-disable-next-line no-unused-vars
  ERROR = 'error',
  /**
   * An unknown error occurred. This would likely be a caught error.
   */
  // eslint-disable-next-line no-unused-vars
  UNKNOWN_ERROR = 'unknown',
}
