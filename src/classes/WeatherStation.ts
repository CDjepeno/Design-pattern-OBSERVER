import { IObserver } from '../interfaces/IObserver';
import { ISubject } from "../interfaces/ISubject";

export class WeatherStation implements ISubject {
  temp: number;
  pressure: number;
  humidity: number;
  arrayObservers: IObserver[] = [];

  constructor(t: number, h: number, p: number,) {
    this.temp = t 
    this.humidity = h
    this.pressure = p 
  }

  subscribe(observer: IObserver) {
    this.arrayObservers.push(observer)
  }

  unSubscribe(observer: IObserver) {
    let index = this.arrayObservers.indexOf(observer)

    this.arrayObservers.splice(index,1)
  }

  notifyObservers() {
    console.log('notification aux subscribers');
    
    for (const observer of this.arrayObservers) {
      observer.update(this.temp,this.pressure, this.humidity)
    }
  }

  setMesures(t: number, h: number, p: number) {
    this.temp = t
    this.humidity = h
    this.pressure = p 

    this.notifyObservers()
  }

}