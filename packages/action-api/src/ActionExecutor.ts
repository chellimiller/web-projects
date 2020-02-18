import { Result } from '@chellimiller/result-api'

/**
 * Function to execute an action.
 */
export type ActionExecutor<DATA, ERROR> = () => Promise<Result<DATA, ERROR>>
