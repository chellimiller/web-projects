import { DataSourceSubscriber } from './DataSourceSubscriber'

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
