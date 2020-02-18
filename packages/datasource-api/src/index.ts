import { Result } from '@chellimiller/result-api'

/**
 * Function for subscribing to a DataSource.
 * Define this separately so it can be passed into the unsubscribe function on the datasource.
 */
export type DataSourceSubscriber<DATA> = (result: Result<DATA, any>) => void

/**
 * A data source that can be subscribed to.
 * Subscribers can recieve updates when the data changes.
 */
export interface DataSource<DATA> {
  /**
   * The data at that moment. This should generally not be used.
   */
  readonly data: DATA

  /**
   * Subscribe to the data.
   *
   * @param subscriber Function called when the data changes.
   */
  subscribe(subscriber: DataSourceSubscriber<DATA>): this

  /**
   * Unsubscribe from data changes.
   *
   * @param subscriber Function that will be removed from the DataSource's subscribers.
   */
  unsubscribe(subscriber: DataSourceSubscriber<DATA>): this
}
