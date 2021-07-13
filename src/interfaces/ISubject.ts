import { ISubscribers } from './ISubscribers';
export interface ISubject {

  subscribe(observer: ISubscribers): void;
  unSubscribe(oberserver: ISubscribers): void;
  notifySubscribers(): void
}