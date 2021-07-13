import { ISubscribers } from '../interfaces/ISubscribers';
import { IDisplay } from '../interfaces/IDisplay';
import { ISubject } from '../interfaces/ISubject';

export class DisplayStats implements ISubscribers, IDisplay {

  subject: ISubject

  constructor(weatherStation: ISubject) {
    this.subject = weatherStation
    weatherStation.subscribe(this)
  }

  update(t: number, p: number, h: number) {
    this.display()
    console.log(`Temp: ${t}°C, Humidité: ${h}%, Pression: ${p}bar`);
  }


  display() {
    console.log('Statistique :');
  }

}