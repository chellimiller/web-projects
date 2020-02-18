import { Result } from '@chellimiller/result-api'

/**
 * Function for subscribing to a DataSource.
 * Define this separately so it can be passed into the unsubscribe function on the datasource.
 */
export type DataSourceSubscriber<DATA> = (result: Result<DATA, any>) => void
