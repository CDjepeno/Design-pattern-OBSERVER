import { IObserver } from './IObserver';
export interface ISubject {

  subscribe(observer: IObserver): void;
  unSubscribe(oberserver: IObserver): void;
  notifyObservers(): void
}