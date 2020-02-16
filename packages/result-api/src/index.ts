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

/**
 * Defines properties that exist on all result types.
 */
type GeneralResult<T extends ResultType> = {
  /**
   * Describes the type of result that is being returned.
   */
  type: T

  /**
   * Human-readable message for use in the console or UI.
   */
  messsage: string
}

/**
 * Successful result that occurs when everything goes as expected.
 * This is the "happy path" result.
 */
export type Success<DATA> = GeneralResult<ResultType.SUCCESS> & {
  /**
   * Data that was returned.
   */
  data: DATA
}

/**
 * Error result that occurs when something goes wrong.
 * This is for expected and definable errors.
 * For example, if making an HTTP request, we might expect we could get an HTTP error.
 */
export type Error<ERROR> = GeneralResult<ResultType.ERROR> & {
  /**
   * Error that occurred.
   */
  error: ERROR
}

/**
 * Error result that occurs when an unknown error occurs.
 * This is for unexpected and undefinable errors.
 * For example, we don't know what type of error we are catching in a catch statement.
 */
export type UnknownError = GeneralResult<ResultType.UNKNOWN_ERROR> & {
  /**
   * Error that was caught.
   */
  error: any
}

/**
 * Result returned from a promise, data source, or other function.
 */
export type Result<DATA, ERROR> = Success<DATA> | Error<ERROR> | UnknownError
