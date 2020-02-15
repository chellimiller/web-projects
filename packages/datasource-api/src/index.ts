export type DataSourceSubscriber<T> = (data: T) => void

export interface DataSource<T> {
  readonly data: T
  subscribe(subscriber: DataSourceSubscriber<T>): this
  unsubscribe(subscriber: DataSourceSubscriber<T>): this
}
