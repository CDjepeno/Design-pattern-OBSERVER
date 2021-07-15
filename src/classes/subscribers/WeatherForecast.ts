import { IDisplay } from '../../interfaces/IDisplay';
import { ISubscribers } from '../../interfaces/ISubscribers';
import { ISubject } from '../../interfaces/ISubject';

export class WeaterForecast implements IDisplay, ISubscribers {

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