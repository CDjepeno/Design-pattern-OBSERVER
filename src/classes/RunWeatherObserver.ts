import { WeatherStation } from "./WeatherStation";
import { DisplayCondition } from "./subscribers/DisplayCondition";
import { WeaterForecast } from "./subscribers/WeatherForecast";
import { DisplayStats } from "./subscribers/DisplayStats";

const weatherStation = new WeatherStation(30, 30, 40);

new DisplayCondition(weatherStation);
new WeaterForecast(weatherStation);
new DisplayStats(weatherStation);

weatherStation.setMesures(20, 30, 50);

weatherStation.setMesures(40, 30, 50);
