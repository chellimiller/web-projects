/**
 * Function for subscribing to a DataSource.
 * Define this separately so it can be passed into the unsubscribe function on the datasource.
 */
export type DataSourceSubscriber<T> = (data: T) => void

/**
 * A data source that can be subscribed to.
 * Subscribers can recieve updates when the data changes.
 */
export interface DataSource<T> {
  /**
   * The data at that moment. This should generally not be used.
   */
  readonly data: T

  /**
   * Subscribe to the data.
   *
   * @param subscriber Function called when the data changes.
   */
  subscribe(subscriber: DataSourceSubscriber<T>): this

  /**
   * Unsubscribe from data changes.
   *
   * @param subscriber Function that will be removed from the DataSource's subscribers.
   */
  unsubscribe(subscriber: DataSourceSubscriber<T>): this
}
