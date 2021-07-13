import { IDisplay } from '../interfaces/IDisplay';
import { ISubscribers } from '../interfaces/ISubscribers';
import { ISubject } from '../interfaces/ISubject';

export class DisplayCondition implements ISubscribers, IDisplay {

  subject: ISubject

  constructor(WeatherStation: ISubject) {
    this.subject = WeatherStation
    WeatherStation.subscribe(this)
  }

  update(t: number, p: number, h: number) {
    this.display()
    if(t > 30) {
      console.log(`Température très chaude Temp: ${t} Pression: ${p} Humidité: ${h}`);
    } else {
      console.log(`Température normal Température: ${t} Pression: ${p} Humidité: ${h}`);
    }
    
  }

  display() {
    console.log("Condition:") 
  }
}