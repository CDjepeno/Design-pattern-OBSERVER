import { ISubscribers } from "../interfaces/ISubscribers";
import { ISubject } from "../interfaces/ISubject";

export class WeatherStation implements ISubject {
  temp: number;
  pressure: number;
  humidity: number;
  arraySubscribers: ISubscribers[] = [];

  constructor(t: number, h: number, p: number) {
    this.temp = t;
    this.humidity = h;
    this.pressure = p;
  }

  subscribe(observer: ISubscribers) {
    this.arraySubscribers.push(observer);
  }

  unSubscribe(observer: ISubscribers) {
    let index = this.arraySubscribers.indexOf(observer);

    this.arraySubscribers.splice(index, 1);
  }

  notifySubscribers() {
    console.log("notification aux subscribers");

    for (const subscriber of this.arraySubscribers) {
      subscriber.update(this.temp, this.pressure, this.humidity);
    }
  }

  setMesures(t: number, h: number, p: number) {
    this.temp = t;
    this.humidity = h;
    this.pressure = p;

    this.notifySubscribers();
  }
}
