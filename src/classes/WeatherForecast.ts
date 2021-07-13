import { IDisplay } from '../interfaces/IDisplay';
import { IObserver } from '../interfaces/IObserver';
import { ISubject } from '../interfaces/ISubject';
import { WeatherStation } from './WeatherStation';

export class WeaterForecast implements IDisplay, IObserver {

  subject: ISubject

  constructor(weatherStation: ISubject) {
    this.subject = weatherStation
    weatherStation.subscribe(this)
  }

  update(t: number, p: number, h: number) {
    this.display()
    if(t > 30) {
      console.log("Température très chaude prévoir short et maillot de bain");
    } else {
      console.log("Température normal");
    }
  }

  display() {
    console.log('Prévision : ');
  }
}