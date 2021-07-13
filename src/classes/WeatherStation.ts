import { IObserver } from '../interfaces/IObserver';
import { ISubject } from "../interfaces/ISubject";

export class WeatherStation implements ISubject {
  temp: number;
  pressure: number;
  humidity: number;
  arrayObservers: IObserver[] = [];

  constructor(t: number, p: number, h: number) {
    this.temp = t 
    this.pressure = p 
    this.humidity = h
  }

  subscribe(observer: IObserver) {
    this.arrayObservers.push(observer)
  }

  unSubscribe(observer: IObserver) {
    let index = this.arrayObservers.indexOf(observer)

    this.arrayObservers.splice(index,1)
  }

  notifyObservers() {
    for (const observer of this.arrayObservers) {
      observer.update()
    }
  }

  setMesures() {
    
  }

}